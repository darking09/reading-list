import { CloseButtonProps } from '@typesFiles/props/closeButton'

export default function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <div className="relative flex justify-end mb-[-0.75rem] mr-[-0.75rem] z-10">
      <button className="flex items-center justify-center w-8 h-8 p-1 bg-zinc-200 rounded-full text-black hover:bg-zinc-300 focus:outline-none focus:ring focus:ring-zinc-100" onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  )
}
