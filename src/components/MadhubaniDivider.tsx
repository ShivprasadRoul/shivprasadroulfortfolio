import Image from "next/image";

interface Props {
  variant: "peacock" | "lotus";
  className?: string;
  priority?: boolean;
}

export default function MadhubaniDivider({ variant, className = "", priority = false }: Props) {
  const src =
    variant === "peacock" ?"/art/divider-peacock.png" :"/art/divider-lotus-row.png";

  return (
    <div className={`w-full overflow-hidden max-h-[70px] ${className}`}>
      <Image
        src={src}
        alt=""
        aria-hidden="true"
        width={1792}
        height={1024}
        priority={priority}
        sizes="100vw"
        className="w-full h-full object-cover object-center opacity-30"
      />
    </div>
  );
}