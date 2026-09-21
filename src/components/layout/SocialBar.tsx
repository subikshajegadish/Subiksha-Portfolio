import { SocialLinks } from '../ui/SocialLinks';

/** Fixed icon row centred at the top of the viewport. */
export function SocialBar() {
  return (
    <div className="pointer-events-none fixed top-6 right-0 left-0 z-5 flex flex-col items-center gap-3">
      <SocialLinks variant="bar" className="pointer-events-auto" />
      <div className="h-1 w-[230px] rounded-[2px] bg-azure" />
    </div>
  );
}
