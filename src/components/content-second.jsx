import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function ContentSecond() {
  return (
    (<div className="max-w-4xl mx-auto p-6">
      <div className="flex w-full mb-6">
        <Input className="flex-1" placeholder="Search integrations" />
      </div>
      <div className="space-y-4">
        <Card className="flex items-center p-4">
          <FontAwesomeIcon icon={faEnvelope} className="text-[#6e6e6e] h-10 w-10" />
          <div className="flex flex-col flex-grow ml-4">
            <span className="font-semibold">Email <Badge className="ml-4 bg-green-200 text-green-500">
            Active
          </Badge></span> 
            <span className="text-sm text-[#6e6e6e]">Receive an email every time a user submit their answer</span>
          </div>
        </Card>
        <Card className="flex items-center p-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg" className="text-[#0f9d58]" />
          <div className="flex flex-col flex-grow ml-4">
            <span className="font-semibold">Google Sheets</span>
            <span className="text-sm text-[#6e6e6e]">
              Send your data straight to Google Sheets. Automatically syncs as results come in.
            </span>
          </div>
          <Button className="ml-4">Connect</Button>
        </Card>
        <Card className="flex items-center p-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" className="text-[#0f9d58] h-12 w-12"/>
          <div className="flex flex-col flex-grow ml-4">
            <span className="font-semibold">Excel</span>
            <span className="text-sm text-[#6e6e6e]">
              Send your typeform responses to Excel Online. Turn feedback into graphs, support queries into workflows,
              and much more.
            </span>
          </div>
          <Button className="ml-4">Connect</Button>
        </Card>
      </div>
    </div>)
  );
}

function FileSpreadsheetIcon(props) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M8 13h2" />
      <path d="M14 13h2" />
      <path d="M8 17h2" />
      <path d="M14 17h2" />
    </svg>)
  );
}


function InboxIcon(props) {
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
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path
        d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>)
  );
}
