interface Props {
  active: string;
  setActive: (v: string) => void;
}

export default function Tabs({ active, setActive }: Props) {
  const tabs = ["publish", "draft", "thrash"];

  return (
    <div className="flex gap-2 mb-4">
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => setActive(t)}
          className={`px-3 py-1 rounded ${
            active === t ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}