import { Button } from "@/components/ui/button"

function RestoranHeader(data : {name?: string, averageRating?: number, place?: string, logo?: string}) {
  return (
    <div className="flex items-center justify-between px-4 py-4 mt-4 border-b border-gray-300">
      <div className="flex items-center gap-3">
        <img
          src={data.logo}
          className="w-12 h-12 rounded-full"
        />

        <div>
          <h1 className="font-semibold">{data?.name}</h1>
          <div className="text-sm text-gray-500 flex items-center gap-1">
            ⭐ {data?.averageRating} · 
          </div>
          <div className="text-sm text-gray-500 flex items-center gap-1">
            {data?.place}
          </div>
        </div>
      </div>

      <Button className="border rounded-full p-2">
        🔗 Share
      </Button>
    </div>
  );
}
export default RestoranHeader;