'use client';
import UploadForm from '~/components/UploadForm';
import { useParams } from 'next/navigation';

export default function ModifyPage() {
  const { id } = useParams();

  return <UploadForm mode="modify" placeId={id as string} />;
}
