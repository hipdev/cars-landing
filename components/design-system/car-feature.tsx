import { cn } from '@/lib/utils';
import Image from 'next/image';

type CarFeatureProps = {
  label: string;
  iconSrc: string;
  wrapperClassName?: string;
  iconClassName?: string;
  labelClassName?: string;
};

/**
 * The above type defines the props expected by the CarFeature component in a TypeScript React
 * application.
 * @property {string} label - The `label` property is a string that represents the text or description
 * of the car feature. It could be something like "Air Conditioning", "Bluetooth Connectivity",
 * "Parking Assist", etc.
 * @property {string} iconSrc - The `iconSrc` property in the `CarFeatureProps` type represents the
 * source URL of the icon image that will be displayed for the car feature. It is a required property
 * and must be a string type containing the URL of the icon image.
 * @property {string} wrapperClassName - The `wrapperClassName` property in the `CarFeatureProps` type
 * is used to specify the class name for the wrapper element of the CarFeature component. It is an
 * optional property, so if no value is provided when using the CarFeature component, it will default
 * to an empty string. This allows
 * @property {string} iconClassName - The `iconClassName` property in the `CarFeatureProps` type is
 * used to specify the CSS class name for styling the image element within the `CarFeature` component.
 * This property allows you to apply specific styles to the image element if needed.
 * @property {string} labelClassName - The `labelClassName` property in the `CarFeatureProps` type is
 * used to specify the CSS class name for styling the label of the car feature in the `CarFeature`
 * component. This allows for custom styling of the label text if needed.
 */
export default function CarFeature({
  label,
  iconSrc,
  wrapperClassName = '',
  iconClassName = '',
  labelClassName = '',
}: CarFeatureProps) {
  return (
    <div className={cn('flex items-center gap-2', wrapperClassName)}>
      <Image
        src={iconSrc}
        alt={label}
        width={25}
        height={25}
        className={cn('h-auto w-auto', iconClassName)}
        draggable={false}
      />
      <span className={cn('relative top-0.5 text-xl', labelClassName)}>
        {label}
      </span>
    </div>
  );
}
