import Question from "../components/Question"
import RightSidebar from "../components/RightSidebar"

export default function Home() {
  return (
    <div>
      <div className="md:grid grid-cols-8">
        <div className="col-span-2">

        </div>
        <div className="col-span-4">
          <Question firstName="divine" lastName="edeh" id = "1" post_text="this is a new post" username="divine_edeh" />
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
