import { type AdminConsoleKey } from '@logto/phrases';
import { TenantTag } from '@logto/schemas';
import { condArray } from '@silverhand/essentials';

import TenantEnvTag from '@/components/TenantEnvTag';
import { isDevFeaturesEnabled } from '@/consts/env';
import Divider from '@/ds-components/Divider';
import DynamicT from '@/ds-components/DynamicT';
import Tag from '@/ds-components/Tag';
import { ReservedPlanName } from '@/types/subscriptions';

import * as styles from './index.module.scss';

type Props = {
  tag: TenantTag;
};

const descriptionMap: Record<TenantTag, AdminConsoleKey> = {
  [TenantTag.Development]: 'tenants.create_modal.development_description',
  [TenantTag.Production]: 'tenants.create_modal.production_description',
  // Todo @xiaoyijun Remove deprecated tag
  [TenantTag.Staging]: 'tenants.create_modal.production_description',
};

const availableProductionPlanNames = [
  ReservedPlanName.Free,
  // Todo @xiaoyijun [Pricing] Remove feature flag
  ...condArray(!isDevFeaturesEnabled && ReservedPlanName.Hobby),
  ReservedPlanName.Pro,
];

function EnvTagOptionContent({ tag }: Props) {
  // Todo @xiaoyijun Deprecated tag
  if (tag === TenantTag.Staging) {
    return null;
  }

  return (
    <div className={styles.container}>
      <TenantEnvTag isAbbreviated={false} tag={tag} size="large" className={styles.tag} />
      <div className={styles.description}>
        <DynamicT forKey={descriptionMap[tag]} />
      </div>
      <Divider />
      <div className={styles.hint}>
        {tag === TenantTag.Development && (
          <DynamicT forKey="tenants.create_modal.development_hint" />
        )}
        {tag === TenantTag.Production && (
          <>
            <DynamicT forKey="tenants.create_modal.available_plan" />
            {availableProductionPlanNames.map((planName) => (
              <Tag key={planName} variant="cell" size="small" className={styles.planNameTag}>
                {planName}
              </Tag>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default EnvTagOptionContent;
