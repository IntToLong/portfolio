export default function TemporarilyUnavailable() {
  return (
    <p className="absolute top-40 left-1/2 flex -translate-x-1/2 -translate-y-1/2 -rotate-30 flex-col overflow-hidden rounded-md bg-amber-300 font-bold">
      <span className="bg-red-600 p-2 text-center text-white">ATTENTION</span>
      <span className="p-5 text-center">TEMPORARILY UNAVAILABLE</span>
    </p>
  );
}
