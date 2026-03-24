export default function Chatbot() {
  return (
    <div className="fixed bottom-4 right-4 w-80 border border-gray-400">
      <div className="bg-black text-white flex flex-col p-2">
        <p className="font-semibold">Atelier bot</p>
        <span className="text-sm">Available</span>
      </div>

      {/* Messages */}

      <div className="bg-white p-2.5 flex flex-col gap-2">
        <div className="border border-gray-200 bg-gray-100 p-1 justify-start">
          <p className="text-sm ">Hi! How can I help you today?</p>
        </div>

        <div className="border border-gray-200 bg-gray-100 p-1 justify-end">
          <p className="text-sm ">Returns</p>
        </div>
      </div>

      {/* Input */}
      <div className="p-2 border-t flex gap-2 bg-white">
        <input
          className="text-sm border border-gray-200 w-6xl p-0.5"
          placeholder="Write..."
        />
        <button
          type="submit"
          className="w-full bg-black text-white p-2 tracking-wider text-sm hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:bg-gray-400"
        >
          Send
        </button>
      </div>
    </div>
  );
}
