interface MediaPlaceholderProps {
  label: string;
  className?: string;
}

export default function MediaPlaceholder({ label, className = "" }: MediaPlaceholderProps) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center ${className}`}
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.01))",
      }}
    >
      <span className="text-[11px] uppercase tracking-[1.5px] text-white/35 text-center px-4">
        {label}
      </span>
    </div>
  );
}
