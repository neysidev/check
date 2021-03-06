import Link from "next/link"

import Stack from "../shared/Stack"
import Icon from "../shared/Icon"

const folders = [
  { href: "check", name: "Check" },
  { href: "doit", name: "Doit" },
]

export default function Folders() {
  return (
    <Stack direction="flex-col">
      <h2 className="text-sm font-bold p-2 text-gray-100">Folders</h2>
      <ul className="flex flex-col">
        {folders.map(folder => (
          <li key={folder.href} className="text-sm">
            <Link href={`/folder/${folder.href}`}>
              <a className="flex space-x-2 p-2 items-center text-gray-300 rounded transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-600">
                <Icon name="Folder" width={20} height={20} />
                <span>{folder.name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Stack>
  )
}
