interface YouTubeEmbedProps {
  id: string;
  title: string;
}

export default function YouTubeEmbed({ id, title }: YouTubeEmbedProps) {
  return (
    <iframe
      className="block h-full w-full border-0"
      src={`https://www.youtube.com/embed/${id}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}
