export default function Header() {
  return (
    <div className="flex p-4 gap-3 items-center justify-between shadow-lg bg-white h-[50px]">
      <div className="flex items-center gap-2">
        <a href="">
          <img src="/SVG ICONS/3BAR.svg" alt="" />
        </a>
        <a href="#">
          <img src="/LOGOS/F1M5_Logo.webp" alt="logo" />
        </a>
      </div>
      <div className="flex items-center gap-2">
        <img src="/SVG ICONS/wallet.svg" alt="" />
        <strong className="text-main font-bold">$1,990.6</strong>
        <img src="/SVG ICONS/userhead.svg" alt="" />
      </div>
    </div>
  );
}
