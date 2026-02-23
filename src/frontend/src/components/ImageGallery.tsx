import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const galleryImages = [
  { src: '/assets/generated/building-progress-1.dim_400x300.png', alt: 'Building Progress 1' },
  { src: '/assets/generated/building-progress-2.dim_400x300.png', alt: 'Building Progress 2' },
  { src: '/assets/generated/building-progress-3.dim_400x300.png', alt: 'Building Progress 3' },
  { src: '/assets/generated/building-progress-1.dim_400x300.png', alt: 'Building Progress 4' },
  { src: '/assets/generated/building-progress-2.dim_400x300.png', alt: 'Building Progress 5' },
  { src: '/assets/generated/building-progress-3.dim_400x300.png', alt: 'Building Progress 6' }
];

export default function ImageGallery() {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Image History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
