import RightSidebar from "../components/RightSidebar"

export default function Home() {
  return (
    <div>
      <div className="md:grid grid-cols-8">
        <div className="col-span-2">

        </div>
        <div className="col-span-4">

        </div>
        <div className="col-span-2">
          <div>
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}
