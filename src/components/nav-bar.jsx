import Link from "next/link"
import { Tabs } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export function NavBar() {
  return (
    (<div
      className="flex flex-col md:flex-row justify-between items-center p-4 border-b">
      <div className="flex items-center space-x-2">
        <Link className="text-sm font-medium" href="#">
          My Workspace
        </Link>
        <span>/</span>
        <h1 className="text-lg font-bold">My new form</h1>
      </div>
      <Tabs>
          <div className="flex space-x-1 justify-center">
            <div>Create</div>
            <div>Connect</div>
            <div>Share</div>
            <div>Results</div>
          </div>
        </Tabs>
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <Button className="flex items-center space-x-2" variant="secondary">
          <SettingsIcon className="h-5 w-5" />
          <span>Publish</span>
        </Button>
        <UserIcon className="h-8 w-8 rounded-full bg-gray-300" />
      </div>
    </div>)
  );
}

function SettingsIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>)
  );
}


function UserIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>)
  );
}