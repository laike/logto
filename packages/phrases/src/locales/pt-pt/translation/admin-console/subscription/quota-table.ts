const quota_table = {
  quota: {
    title: 'Quota',
    tenant_limit: 'Limite do inquilino',
    base_price: 'Preço base',
    mau_unit_price: '* Preço unitário MAU',
    mau_limit: 'Limite MAU',
  },
  application: {
    title: 'Aplicações',
    total: 'Total de aplicações',
    m2m: 'Aplicações de máquina para máquina',
  },
  resource: {
    title: 'Recursos da API',
    resource_count: 'Contagem de recursos',
    scopes_per_resource: 'Permissões por recurso',
  },
  branding: {
    title: 'UI e branding',
    custom_domain: 'Domínio personalizado',
    custom_css: 'CSS personalizado',
    app_logo_and_favicon: 'Logótipo da aplicação e favicon',
    dark_mode: 'Modo escuro',
    i18n: 'Internacionalização',
  },
  user_authn: {
    title: 'Autenticação do utilizador',
    omni_sign_in: 'Início de sessão Omni',
    password: 'Palavra-passe',
    passwordless: 'Sem palavra-passe - E-mail e SMS',
    email_connector: 'Conector de e-mail',
    sms_connector: 'Conector de SMS',
    social_connectors: 'Conectores sociais',
    standard_connectors: 'Conectores padrão',
    built_in_email_connector: 'Conector de e-mail incorporado',
    mfa: 'MFA',
    sso: 'SSO Empresarial',
  },
  user_management: {
    title: 'Gestão de utilizadores',
    user_management: 'Gestão de utilizadores',
    roles: 'Funções',
    machine_to_machine_roles: 'Funções de máquina para máquina',
    scopes_per_role: 'Permissões por função',
  },
  audit_logs: {
    title: 'Registos de auditoria',
    retention: 'Retenção',
  },
  hooks: {
    title: 'Hooks',
    hooks: 'Hooks',
  },
  organizations: {
    title: 'Organização',
    organizations: 'Organizações',
    monthly_active_organization: 'Organização ativa mensalmente',
    allowed_users_per_org: 'Utilizadores permitidos por org',
    invitation: 'Convite (Em breve)',
    org_roles: 'Funções da organização',
    org_permissions: 'Permissões da organização',
    just_in_time_provisioning: 'Provisionamento just-in-time',
  },
  support: {
    title: 'Suporte',
    community: 'Comunidade',
    customer_ticket: 'Bilhete de suporte',
    premium: 'Premium',
  },
  mau_unit_price_footnote:
    '* Os seus utilizadores ativos mensais (MAU) são divididos em 3 níveis com base na frequência com que iniciam sessão durante o ciclo de faturação. Cada nível tem um preço diferente por unidade de MAU.',
  unlimited: 'Ilimitado',
  contact: 'Contactar',
  monthly_price: '${{value, number}}/mês',
  mau_price: '${{value, number}}/MAU',
  days_one: '{{count, number}} dia',
  days_other: '{{count, number}} dias',
  add_on: 'Suplemento',
  tier: 'Nível{{value, number}}: ',
  free_token_limit_tip: 'Gratuito para {{value}}M de tokens emitidos.',
  paid_token_limit_tip:
    'Gratuito para {{value}}M de tokens emitidos. Podemos adicionar taxas se exceder {{value}}M de tokens assim que finalizarmos os preços.',
  paid_quota_limit_tip:
    'Podemos adicionar taxas para funcionalidades que excedam o limite da sua quota como suplementos assim que finalizarmos os preços.',
  beta_feature_tip:
    'Gratuito durante a fase beta. Começaremos a cobrar assim que finalizarmos os preços dos suplementos.',
  usage_based_beta_feature_tip:
    'Gratuito durante a fase beta. Começaremos a cobrar assim que finalizarmos os preços baseados no uso da organização.',
  beta: 'Beta',
  add_on_beta: 'Suplemento (Beta)',
};

export default Object.freeze(quota_table);
