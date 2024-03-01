import { cn } from '@/lib/utils';

type ListProps = {
  list: { feature: string; value: string }[];
  title?: string;
  wrapperClassName?: string;
  listClasssName?: string;
};

/**
 * The type `ListProps` defines the props expected by the `BlockList` component in a TypeScript React
 * application.
 * @property {{ feature: string; value: string }[]} list - The `ListProps` type defines the properties
 * expected by the `BlockList` component:
 * @property {string} title - The `title` property in the `ListProps` type is an optional string that
 * represents the title of the block list component. It is not required for the component to function,
 * hence the `?` symbol indicating it is optional.
 * @property {string} wrapperClassName - The `wrapperClassName` property in the `ListProps` type is
 * used to specify the CSS class name for the wrapper element that contains the list. This allows you
 * to style the wrapper element separately from the list itself. If no `wrapperClassName` is provided
 * when using the `BlockList` component
 * @property {string} listClasssName - The `listClasssName` property in the `ListProps` type is a
 * string that represents the class name for the list items in the BlockList component. It is an
 * optional property, indicated by the `?` symbol, which means it can be provided but is not required.
 * This class
 */
export default function BlockList({
  list,
  title,
  wrapperClassName,
  listClasssName,
}: ListProps) {
  return (
    <div className={cn('w-full text-xl', wrapperClassName)}>
      <h4 className='mb-5 font-semibold'>{title}</h4>
      <div className='flex'>
        {/* List features */}
        <div className='flex-1'>
          {list.map((spec) => (
            <div
              key={spec.feature}
              className={cn(
                'mb-3.5 flex items-center justify-between',
                listClasssName,
              )}
            >
              <span className='flex-1'>{spec.feature}</span>
            </div>
          ))}
        </div>

        {/* List values */}
        <div className=''>
          {list.map((spec) => (
            <div
              key={spec.value}
              className={cn(
                'mb-3.5 flex items-center justify-between',
                listClasssName,
              )}
            >
              <span className='flex-1'>{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
