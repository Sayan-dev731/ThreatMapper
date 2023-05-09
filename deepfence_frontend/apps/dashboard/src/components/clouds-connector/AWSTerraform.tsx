import cx from 'classnames';
import { memo } from 'react';
import { HiViewGridAdd } from 'react-icons/hi';
import { Card, Step, Stepper, Typography } from 'ui-components';

import { CopyToClipboard } from '@/components/CopyToClipboard';
import { useGetApiToken } from '@/features/common/data-component/getApiTokenApiLoader';

export const AWSTerraform = memo(() => {
  const { status, data } = useGetApiToken();
  const dfApiKey =
    status !== 'idle'
      ? '---DEEPFENCE-API-KEY---'
      : data?.api_token === undefined
      ? '---DEEPFENCE-API-KEY---'
      : data?.api_token;
  const code = `provider "aws" {
  region = "<AWS-REGION>; eg. us-east-1"
}

module "deepfence-cloud-scanner_example_single-account" {
  source = "deepfence/cloud-scanner/aws//examples/single-account-ecs"
  version = "0.3.0"
  mgmt-console-url = "<Console URL> eg. XXX.XXX.XX.XXX"
  mgmt-console-port = "443"
  deepfence-key = "${dfApiKey}"
  name = "deepfence-cloud-scanner"
}

variable "image" {
  type        = string
  default     = "[quay.io/deepfenceio/cloud-scanner:1.5.0](http://quay.io/deepfenceio/cloud-scanner:1.5.0)"
}
`;

  return (
    <div className="w-full sm:w-1/2">
      <Stepper>
        <Step indicator={<HiViewGridAdd />} title="Teraform">
          <div className={`${Typography.size.sm} dark:text-gray-200`}>
            Connect to your AWS Cloud Account via Teraform. Find out more information by{' '}
            <a
              href={`https://registry.terraform.io/modules/deepfence/cloud-scanner/aws/latest/examples/single-account-ecs#usag`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 dark:text-blue-500 mt-2"
            >
              reading our documentation
            </a>
            .
          </div>
        </Step>
        <Step indicator="1" title="Region Selection">
          <div>
            <p className={`mb-2.5 ${Typography.size.sm} dark:text-gray-200`}>
              Copy the following code and paste it into a .tf file on your local machine:
            </p>
            <Card className="w-full relative ">
              <pre
                className={cx(
                  'p-4 overflow-auto',
                  `${Typography.weight.normal} ${Typography.size.xs} `,
                )}
              >
                {code}
              </pre>
              <CopyToClipboard data={code} asIcon />
            </Card>
          </div>
        </Step>
        <Step indicator="2" title="Deploy">
          <div className={`${Typography.size.sm} dark:text-gray-400`}>
            <p className="mb-2.5">
              Copy the following commands and paste them into your shell.
            </p>
            <Card className="w-full relative">
              <div className="relative">
                <pre
                  className={cx(
                    'pl-4 pt-4',
                    'h-fit',
                    `${Typography.weight.normal} ${Typography.size.xs} `,
                  )}
                >
                  terraform init
                </pre>
                <CopyToClipboard data={'terraform init'} className="top-4" asIcon />
              </div>
              <div className="relative">
                <pre
                  className={cx(
                    'px-4',
                    'h-fit',
                    `${Typography.weight.normal} ${Typography.size.xs} `,
                  )}
                >
                  terraform plan
                </pre>
                <CopyToClipboard data={'terraform plan'} className="top-0" asIcon />
              </div>
              <div className="relative">
                <pre
                  className={cx(
                    'px-4',
                    'h-fit',
                    `${Typography.weight.normal} ${Typography.size.xs} `,
                  )}
                >
                  terraform apply
                </pre>
                <CopyToClipboard data={'terraform apply'} className="top-0" asIcon />
              </div>
            </Card>
          </div>
        </Step>
      </Stepper>
    </div>
  );
});
