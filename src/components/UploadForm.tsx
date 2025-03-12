'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface PlaceFormData {
  photos: string[];
  place: string;
  description: string;
  location: string;
  longitude: number;
  latitude: number;
  mode_of_travel: string;
  blog: string;
  stay: StayFormData[];
  expenses: ExpenseFormData[];
  nearbyTouristPlaces: string[];
}

interface StayFormData {
  name: string;
  type: string;
  website?: string;
  location: string;
  landmark: string;
  contact: string;
  manager: string;
}

interface ExpenseFormData {
  name: string;
  rate: string;
  total: string;
}

type UploadFormProps = {
  mode: 'upload' | 'modify';
  placeId?: string;
};

const UploadForm: React.FC<UploadFormProps> = ({ mode, placeId }) => {
  const router = useRouter();
  const [expenses, setExpenses] = useState<ExpenseFormData[]>([]);
  const [stayOptions, setStayOptions] = useState<StayFormData[]>([]);
  const [formData, setFormData] = useState<PlaceFormData>({
    photos: [],
    place: '',
    description: '',
    location: '',
    longitude: 0,
    latitude: 0,
    mode_of_travel: '',
    blog: '',
    stay: [],
    expenses: [],
    nearbyTouristPlaces: [],
  });

  // Fetch existing place data if in modify mode
  useEffect(() => {
    if (mode === 'modify' && placeId) {
      const fetchPlaceDetails = async () => {
        try {
          const response = await fetch(`/api/places/${placeId}`);
          if (response.ok) {
            const data: PlaceFormData = await response.json();
            setFormData(data);
            setExpenses(data.expenses);
            setStayOptions(data.stay);
          } else {
            console.error('Failed to fetch place details');
          }
        } catch (error) {
          console.error('Error fetching place details:', error);
        }
      };
      fetchPlaceDetails();
    }
  }, [mode, placeId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map(file => URL.createObjectURL(file));
      setFormData(prev => ({ ...prev, photos: fileArray }));
    }
  };

  const handleStayChange = (index: number, field: keyof StayFormData, value: string) => {
    const updatedStay = [...stayOptions];
    updatedStay[index] = {
      ...updatedStay[index],
      [field]: value || "",
      name: updatedStay[index]?.name || "",
      type: updatedStay[index]?.type || "",
      website: updatedStay[index]?.website || "",
      location: updatedStay[index]?.location || "",
      landmark: updatedStay[index]?.landmark || "",
      contact: updatedStay[index]?.contact || "",
      manager: updatedStay[index]?.manager || "",
    };
    setStayOptions(updatedStay);
  };

  const addStay = () => {
    setFormData(prev => ({ ...prev, stay: [...prev.stay, { name: '', type: '', website: '', location: '', landmark: '', contact: '', manager: '' }] }));
  };

  const handleExpenseChange = (index: number, field: keyof ExpenseFormData, value: string) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index] = {
      ...updatedExpenses[index],
      [field]: value || "",
      name: updatedExpenses[index]?.name || "",
      rate: updatedExpenses[index]?.rate || "",
      total: updatedExpenses[index]?.total || "",
    };
    setExpenses(updatedExpenses);
  };

  const addExpense = () => {
    setFormData(prev => ({ ...prev, expenses: [...prev.expenses, { name: '', rate: '', total: '' }] }));
  };

  const handleNearbyPlacesChange = (index: number, value: string) => {
    const updatedPlaces = [...formData.nearbyTouristPlaces];
    updatedPlaces[index] = value;
    setFormData(prev => ({ ...prev, nearbyTouristPlaces: updatedPlaces }));
  };

  const addNearbyPlace = () => {
    setFormData(prev => ({ ...prev, nearbyTouristPlaces: [...prev.nearbyTouristPlaces, ''] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = mode === 'upload' ? '/api/places' : `/api/places/${placeId}`;
    const method = mode === 'upload' ? 'POST' : 'PUT';
    try {
      const response = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/places');
      } else {
        console.error('Failed to submit the form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
       <h2 className="text-2xl font-semibold mb-4">{mode === 'upload' ? 'Upload a Place' : 'Modify Place Details'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="place" placeholder="Place Name" value={formData.place} onChange={handleChange} className="w-full p-2 border rounded" required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="number" name="longitude" placeholder="Longitude" value={formData.longitude} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="number" name="latitude" placeholder="Latitude" value={formData.latitude} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="mode_of_travel" placeholder="Mode of Travel" value={formData.mode_of_travel} onChange={handleChange} className="w-full p-2 border rounded" required />
        <textarea name="blog" placeholder="Blog" value={formData.blog} onChange={handleChange} className="w-full p-2 border rounded" required />
        <h3 className="text-xl font-semibold mt-4">Add Photos</h3>
        <input type="file" multiple onChange={handleFileUpload} className="w-full p-2 border rounded" />

        <h3 className="text-xl font-semibold mt-4">Add Stay Options</h3>
        {formData.stay.map((stay, index) => (
          <div key={index} className="space-y-2 border p-2 rounded">
            <input type="text" name="name" placeholder="Stay Name" value={stay.name} onChange={(e) => handleStayChange(index, 'name', e.target.value)} className="w-full p-2 border rounded" required />
            <input type="text" name="type" placeholder="Type" value={stay.type} onChange={(e) => handleStayChange(index, 'name', e.target.value)} className="w-full p-2 border rounded" required />
            <input type="text" name="location" placeholder="Location" value={stay.location} onChange={(e) => handleStayChange(index, 'name', e.target.value)} className="w-full p-2 border rounded" required />
          </div>
        ))}
        <button type="button" onClick={addStay} className="bg-green-500 text-white py-1 px-3 rounded">Add Stay</button>

        <h3 className="text-xl font-semibold mt-4">Estimated Expenses</h3>
        {formData.expenses.map((expense, index) => (
          <div key={index} className="space-y-2 border p-2 rounded">
            <input type="text" name="name" placeholder="Expense Name" value={expense.name} onChange={(e) => handleExpenseChange(index, 'name', e.target.value)} className="w-full p-2 border rounded" required />
          </div>
        ))}
        <button type="button" onClick={addExpense} className="bg-green-500 text-white py-1 px-3 rounded">Add Expense</button>
        
        <h3 className="text-xl font-semibold mt-4">Nearby Tourist Places</h3>
        {formData.nearbyTouristPlaces.map((place, index) => (
          <div key={index} className="space-y-2 border p-2 rounded">
            <input type="text" placeholder="Nearby Tourist Place" value={place} onChange={(e) => handleNearbyPlacesChange(index, e.target.value)} className="w-full p-2 border rounded" required />
          </div>
        ))}
        <button type="button" onClick={addNearbyPlace} className="bg-green-500 text-white py-1 px-3 rounded">Add Place</button>

        <button type="submit" className="block bg-blue-500 text-white py-2 px-4 rounded">{mode === 'upload' ? 'Submit' : 'Update'}</button>
      </form>
    </div>
  );
};

export default UploadForm;