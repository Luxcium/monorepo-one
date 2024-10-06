// src/app/zip-images/ServerImageViewer.tsx
'use server';
// 🚫 Do NOT import this module directly in client code ('use client') modules

import { listZipContents } from '@/app/actions/listZipContents';
import Image from 'next/image';
import path from 'path';

export default async function ServerImageViewer() {
  const fileList = await listZipContents();

  return (
    <div className="flex flex-wrap gap-4">
      {fileList.map((file) => (
        <div key={file} className="p-4">
          <Image
            src={`/zip-images/${path.basename(file)}`} // Use dynamic route to serve image
            alt={path.basename(file)}
            width={200}
            height={200}
            priority
          />
          <p className="text-center text-sm">{path.basename(file)}</p>
        </div>
      ))}
    </div>
  );
}
