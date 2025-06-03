import Link from 'next/link';
import { Button } from '../../../components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Restaurant Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md">
          Sorry, we couldn't find the restaurant you're looking for. It may have been removed or the URL might be incorrect.
        </p>
        <Button asChild>
          <Link href="/">
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
} 