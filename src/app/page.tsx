// src/app/page.tsx
import ImageEvolver from '@/components/ImageEvolver';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8">Image Evolution</h1>
      <ImageEvolver />
    </main>
  );
}
