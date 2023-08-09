import Link from 'next/link'

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">The page you&pos;re looking for does not exist.</p>
      <Link href="/" className="text-blue-500 underline">Go back to the homepage
      </Link>

      {/*   */}
    </div>
  )
}

export default NotFoundPage
