import { SocialLinks } from '../ui/SocialLinks';

/** Fixed icon rail, vertically centred on the right edge of the viewport. */
export function SocialBar() {
  return (
    <div className="pointer-events-none fixed top-1/2 right-2 z-5 -translate-y-1/2 md:right-4 xl:right-6">
      <SocialLinks variant="rail" className="pointer-events-auto" />
    </div>
  );
}
