import paywall from './paywall.js';

const upsell = {
  upgrade_plan: 'Aggiorna piano',
  compare_plans: 'Confronta i piani',
  view_plans: 'Visualizza piani',
  create_tenant: {
    title: 'Seleziona il piano del tenant',
    description:
      'Logto offre opzioni competitive di piani con una struttura dei prezzi innovativa e conveniente progettata per le aziende in crescita. <a>Scopri di più</a>',
    base_price: 'Prezzo base',
    monthly_price: '{{value, number}}/mese',
    mau_unit_price: 'Prezzo unitario MAU',
    view_all_features: 'Visualizza tutte le funzionalità',
    select_plan: 'Seleziona <name/>',
    free_tenants_limit: 'Fino a {{count, number}} tenant gratuito',
    free_tenants_limit_other: 'Fino a {{count, number}} tenant gratuiti',
    most_popular: 'Più popolare',
    upgrade_success: 'Aggiornamento a <name/> effettuato con successo',
  },
  mau_exceeded_modal: {
    title: 'MAU ha superato il limite. Aggiorna il tuo piano.',
    notification:
      'Il tuo MAU attuale ha superato il limite di <planName/>. Aggiorna al piano premium tempestivamente per evitare la sospensione del servizio Logto.',
    update_plan: 'Aggiorna piano',
  },
  payment_overdue_modal: {
    title: 'Pagamento della fattura in ritardo',
    notification:
      "Oops! Il pagamento della fattura dell'affittuario <span>{{name}}</span> è fallito. Si prega di pagare tempestivamente la fattura per evitare la sospensione del servizio Logto.",
    unpaid_bills: 'Fatture non pagate',
    update_payment: 'Aggiorna pagamento',
  },
  add_on_quota_item: {
    /** UNTRANSLATED */
    api_resource: 'API resource',
    /** UNTRANSLATED */
    machine_to_machine: 'machine-to-machine application',
    /** UNTRANSLATED */
    tokens: '{{limit}}M tokens',
  },
  /** UNTRANSLATED */
  charge_notification_for_quota_limit:
    'You have surpassed your {{item}} quota limit. Logto will add charges for the usage beyond your quota limit. Charging will commence on the day the new add-on pricing design is released. <a>Learn more</a>',
  paywall,
};

export default Object.freeze(upsell);
