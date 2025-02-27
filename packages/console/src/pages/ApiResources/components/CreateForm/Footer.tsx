import { ReservedPlanId } from '@logto/schemas';
import { useContext } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import ContactUsPhraseLink from '@/components/ContactUsPhraseLink';
import PlanName from '@/components/PlanName';
import QuotaGuardFooter from '@/components/QuotaGuardFooter';
import { isDevFeaturesEnabled } from '@/consts/env';
import { TenantsContext } from '@/contexts/TenantsProvider';
import Button from '@/ds-components/Button';
import useApiResourcesUsage from '@/hooks/use-api-resources-usage';
import useSubscriptionPlan from '@/hooks/use-subscription-plan';

type Props = {
  isCreationLoading: boolean;
  onClickCreate: () => void;
};

function Footer({ isCreationLoading, onClickCreate }: Props) {
  const { t } = useTranslation(undefined, { keyPrefix: 'admin_console' });
  const { currentTenantId } = useContext(TenantsContext);
  const { data: currentPlan } = useSubscriptionPlan(currentTenantId);
  const { hasReachedLimit } = useApiResourcesUsage();

  if (
    currentPlan &&
    hasReachedLimit &&
    /**
     * Todo @xiaoyijun [Pricing] Remove feature flag
     * We don't guard API resources quota limit for paid plan, since it's an add-on feature
     */
    (!isDevFeaturesEnabled || currentPlan.id === ReservedPlanId.Free)
  ) {
    return (
      <QuotaGuardFooter>
        <Trans
          components={{
            a: <ContactUsPhraseLink />,
            planName: <PlanName name={currentPlan.name} />,
          }}
        >
          {t('upsell.paywall.resources', {
            count: currentPlan.quota.resourcesLimit ?? 0,
          })}
        </Trans>
      </QuotaGuardFooter>
    );
  }

  return (
    <Button
      isLoading={isCreationLoading}
      htmlType="submit"
      title="api_resources.create"
      size="large"
      type="primary"
      onClick={onClickCreate}
    />
  );
}

export default Footer;
