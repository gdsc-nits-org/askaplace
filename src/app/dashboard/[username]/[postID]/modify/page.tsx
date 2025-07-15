'use client';
import UploadForm from '~/components/UploadForm';
import { useParams } from 'next/navigation';

export default function ModifyPage() {
  const { username , postID } = useParams();

  return <UploadForm mode="modify" placeId={postID as string} />;
}
