import { withAppInsights } from '@logto/app-insights/react';
import { conditionalArray } from '@silverhand/essentials';
import { useContext } from 'react';

import PageMeta from '@/components/PageMeta';
import { TenantsContext } from '@/contexts/TenantsProvider';
import useSubscription from '@/hooks/use-subscription';
import useSubscriptionPlans from '@/hooks/use-subscription-plans';
import useSubscriptionUsage from '@/hooks/use-subscription-usage';
import { pickupFeaturedPlans } from '@/utils/subscription';

import Skeleton from '../components/Skeleton';

import CurrentPlan from './CurrentPlan';
import PlanComparisonTable from './PlanComparisonTable';
import SwitchPlanActionBar from './SwitchPlanActionBar';
import * as styles from './index.module.scss';

function Subscription() {
  const { currentTenantId } = useContext(TenantsContext);
  const { data: subscriptionPlans, error: fetchPlansError } = useSubscriptionPlans();
  const {
    data: currentSubscription,
    error: fetchSubscriptionError,
    mutate: mutateSubscription,
  } = useSubscription(currentTenantId);
  const { data: subscriptionUsage, error: fetchSubscriptionUsageError } =
    useSubscriptionUsage(currentTenantId);

  const isLoadingPlans = !subscriptionPlans && !fetchPlansError;
  const isLoadingSubscription = !currentSubscription && !fetchSubscriptionError;
  const isLoadingSubscriptionUsage = !subscriptionUsage && !fetchSubscriptionUsageError;

  const reservedPlans = conditionalArray(
    subscriptionPlans && pickupFeaturedPlans(subscriptionPlans)
  );

  if (isLoadingPlans || isLoadingSubscription || isLoadingSubscriptionUsage) {
    return <Skeleton />;
  }

  if (!subscriptionPlans || !currentSubscription || !subscriptionUsage) {
    return null;
  }

  const currentSubscriptionPlan = subscriptionPlans.find(
    (plan) => plan.id === currentSubscription.planId
  );

  if (!currentSubscriptionPlan) {
    return null;
  }

  return (
    <div className={styles.container}>
      <PageMeta titleKey={['tenants.tabs.subscription', 'tenants.title']} />
      <CurrentPlan
        subscription={currentSubscription}
        subscriptionPlan={currentSubscriptionPlan}
        subscriptionUsage={subscriptionUsage}
      />
      <PlanComparisonTable subscriptionPlans={reservedPlans} />
      <SwitchPlanActionBar
        currentSubscriptionPlanId={currentSubscription.planId}
        subscriptionPlans={reservedPlans}
        onSubscriptionUpdated={mutateSubscription}
      />
    </div>
  );
}

export default withAppInsights(Subscription);
