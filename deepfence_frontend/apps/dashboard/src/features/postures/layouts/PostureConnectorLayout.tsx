import { HiChevronRight } from 'react-icons/hi';
import { generatePath, Outlet, useParams } from 'react-router-dom';
import { Breadcrumb, BreadcrumbLink } from 'ui-components';

import { DFLink } from '@/components/DFLink';

const PostureConnectorLayout = () => {
  const params = useParams() as {
    account: string;
  };

  return (
    <>
      <div className="flex p-2  w-full items-center shadow bg-white dark:bg-gray-800">
        <Breadcrumb separator={<HiChevronRight />} transparent>
          <BreadcrumbLink>
            <DFLink
              to={generatePath('/posture/accounts/:nodeType', {
                nodeType: params.account,
              })}
            >
              POSTURE ACCOUNTS
            </DFLink>
          </BreadcrumbLink>

          <BreadcrumbLink>
            <span className="inherit cursor-auto">Connector</span>
          </BreadcrumbLink>
        </Breadcrumb>
      </div>
      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
};
export const module = {
  element: <PostureConnectorLayout />,
};