"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowDown,
  ArrowRight,
  Bath,
  CalendarDays,
  Camera,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleX,
  CreditCard,
  Eye,
  Gift,
  Heart,
  Images,
  LayoutGrid,
  LockKeyhole,
  MessageCircle,
  Moon,
  PencilRuler,
  Play,
  RefreshCcw,
  Route,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Video,
} from "lucide-react";

// Substitua pelo link oficial do checkout antes da abertura das vendas.
const checkoutHref = "#oferta";
const ctaLabel = "Quero começar a primeira missão por R$37";

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function StickyTopBar() {
  return (
    <div className="founder-bar">
      <p><span>TURMA FUNDADORA</span> Preço especial da Turma Fundadora: <strong>R$37</strong></p>
    </div>
  );
}

function SecurityMicrocopy({ light = false }: { light?: boolean }) {
  return (
    <div className={`security-microcopy ${light ? "security-microcopy--light" : ""}`}>
      <span><LockKeyhole aria-hidden="true" size={14} /> Compra protegida</span>
      <span><CreditCard aria-hidden="true" size={14} /> Produto digital</span>
      <span><ShieldCheck aria-hidden="true" size={14} /> 30 dias de garantia</span>
    </div>
  );
}

function HighConversionCTA({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`cta-wrap ${compact ? "cta-wrap--compact" : ""}`}>
      <motion.a
        href={checkoutHref}
        data-checkout-placeholder="[LINK_DO_CHECKOUT_AQUI]"
        className="cta-button"
        whileHover={reduceMotion ? undefined : { y: -2, scale: 1.01 }}
        whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      >
        <span>{ctaLabel}</span>
        <ArrowRight aria-hidden="true" size={21} strokeWidth={2.4} />
      </motion.a>
      <p className={`cta-microcopy ${light ? "cta-microcopy--light" : ""}`}>
        <LockKeyhole aria-hidden="true" size={14} />
        Compra protegida pela Garantia Primeira Missão de 30 dias
      </p>
    </div>
  );
}

function MissionStep({ label, title, tone, icon }: {
  label: string;
  title: string;
  tone: "blue" | "yellow" | "green";
  icon: ReactNode;
}) {
  return (
    <div className={`mission-step mission-step--${tone}`}>
      <div className="mission-step__icon">{icon}</div>
      <span>{label}</span>
      <strong>{title}</strong>
    </div>
  );
}

function MissionDemo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`hero-visual ${compact ? "hero-visual--compact" : ""}`} aria-label="Exemplo visual da missão Tela para Banho">
      <div className="visual-orbit visual-orbit--one" aria-hidden="true" />
      <div className="visual-orbit visual-orbit--two" aria-hidden="true" />
      <div className="mission-board">
        <div className="mission-board__top">
          <div>
            <span className="mission-board__eyebrow">MINHA MISSÃO</span>
            <h2>Hora de trocar de atividade</h2>
          </div>
          <span className="mission-board__count">3 passos</span>
        </div>

        <div className="mission-track">
          <MissionStep label="AGORA" title="Tela" tone="blue" icon={<Smartphone aria-hidden="true" size={27} />} />
          <ArrowRight className="mission-arrow" aria-hidden="true" size={22} />
          <MissionStep label="DEPOIS" title="Banho" tone="yellow" icon={<Bath aria-hidden="true" size={28} />} />
          <ArrowRight className="mission-arrow" aria-hidden="true" size={22} />
          <MissionStep label="CONCLUÍDO" title="Pronto!" tone="green" icon={<CheckCircle2 aria-hidden="true" size={28} />} />
        </div>

        <div className="mission-board__footer">
          <div className="mini-avatars" aria-hidden="true"><span>M</span><span>P</span><span>V</span></div>
          <p>Uma lógica simples para todos os cuidadores seguirem.</p>
        </div>
      </div>

      <div className="phone-card">
        <div className="phone-card__notch" aria-hidden="true" />
        <span>MISSÃO NO CELULAR</span>
        <Moon aria-hidden="true" size={26} />
        <strong>Banho → Pijama → Sono</strong>
      </div>
    </div>
  );
}

function ProductHeroVisual() {
  return (
    <div className="product-hero" aria-label="Visão ilustrativa do produto Rotina Mais Leve">
      <div className="product-hero__halo" aria-hidden="true" />
      <div className="product-hero__frame">
        <img
          src="images/rotina-mais-leve-hero-v2.webp"
          alt="Mockup ilustrativo do Rotina Mais Leve com caderno, quadro Minha Missão da Manhã, cartões visuais e método VAC"
          width={1122}
          height={1402}
          fetchPriority="high"
        />
      </div>
      <div className="product-hero__badge product-hero__badge--missions">
        <LayoutGrid aria-hidden="true" size={19} />
        <span><strong>6 missões</strong> prontas para adaptar</span>
      </div>
      <div className="product-hero__badge product-hero__badge--formats">
        <Smartphone aria-hidden="true" size={19} />
        <span><strong>Impresso + celular</strong> para usar onde precisar</span>
      </div>
      <small>Representação visual do produto</small>
    </div>
  );
}

function VSLPlaceholder() {
  return (
    <div className="vsl-placeholder" role="img" aria-label="Espaço reservado para o vídeo oficial de apresentação">
      <div className="vsl-placeholder__glow" aria-hidden="true" />
      <div className="vsl-placeholder__content">
        <span className="vsl-placeholder__tag">VÍDEO DE APRESENTAÇÃO</span>
        <div className="vsl-placeholder__play" aria-hidden="true"><Play fill="currentColor" size={26} /></div>
        <strong>Veja como uma Missão Visual funciona</strong>
        <small>[VSL oficial será inserida aqui]</small>
      </div>
    </div>
  );
}

function PainCard({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <Reveal className="pain-card">
      <span className="pain-card__number">{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </Reveal>
  );
}

function FounderStory() {
  return (
    <section className="founder section-pad">
      <div className="container founder__grid">
        <Reveal className="founder__portrait">
          <div className="founder-editorial">
            <img
              src="images/rotina-mais-leve-em-uso-v2.webp"
              alt="Imagem ilustrativa de uma mãe acompanhando a criança ao mover a tarefa Escovar os dentes para Concluído"
              width={1122}
              height={1402}
              loading="lazy"
            />
            <span>IMAGEM ILUSTRATIVA</span>
          </div>
          <div className="community-note">
            <Heart aria-hidden="true" size={19} />
            <p><strong>@autismopara_pais</strong><br />Comunidade com aproximadamente 115 mil seguidores</p>
          </div>
        </Reveal>

        <Reveal className="founder__copy">
          <span className="section-kicker">UMA MÃE, UMA ROTINA REAL</span>
          <h2>“Eu queria entender melhor meu filho antes de apenas repetir a mesma ordem mais uma vez.”</h2>
          <p>Ana é mãe solo de um filho atípico. Sua autoridade não vem de uma credencial clínica. Ela vem da experiência vivida dentro de casa, entre pedidos, repetições, negociações e a vontade diária de compreender melhor o próprio filho.</p>
          <p>Ao observar a rotina, percebeu que muitas situações difíceis começavam antes do momento de maior tensão: na transição, na mudança inesperada e na dificuldade de visualizar o agora, o depois e o fim.</p>
          <blockquote>“O Projeto Missão Aprender nasceu dentro da minha própria casa, da tentativa diária de tornar nossa rotina menos baseada em repetir e mais baseada em mostrar.”</blockquote>
          <small>O alcance do perfil representa comunidade e trajetória, não número de clientes ou prova de resultado do produto.</small>
        </Reveal>
      </div>
    </section>
  );
}

function InstagramCommunity() {
  return (
    <section className="instagram-community section-pad" aria-labelledby="instagram-community-title">
      <div className="container instagram-community__grid">
        <Reveal className="instagram-community__visual">
          <div className="instagram-community__image">
            <img
              src="images/instagram-profile-clean-v2.webp"
              alt="Apresentação limpa do perfil Autismo para Pais, com 115 mil seguidores, sem elementos da interface do celular"
              width={1003}
              height={1568}
              loading="lazy"
            />
          </div>
          <a className="instagram-community__image-link" href="https://www.instagram.com/autismopara_pais/" target="_blank" rel="noreferrer">
            <Camera aria-hidden="true" size={17} />
            Ver perfil oficial
          </a>
        </Reveal>

        <Reveal className="instagram-community__copy">
          <span className="section-kicker">UMA COMUNIDADE QUE JÁ EXISTE</span>
          <h2 id="instagram-community-title">Cerca de 115 mil pessoas acompanham a nossa página.</h2>
          <p className="instagram-community__lead">A @autismopara_pais reúne famílias que buscam informação, inclusão e recursos práticos para o dia a dia.</p>
          <p>O Projeto Missão Aprender nasce desse contato com situações reais da rotina, transformando informação em um começo possível.</p>
          <div className="instagram-community__pill-row">
            <span><Heart aria-hidden="true" size={15} /> Informação e inclusão</span>
            <span><Users aria-hidden="true" size={15} /> Conteúdo para famílias</span>
          </div>
          <small>O alcance do perfil representa comunidade e trajetória. Não representa número de clientes, vendas ou garantia de resultado do produto.</small>
        </Reveal>
      </div>
    </section>
  );
}

function TestimonialPlaceholder({ index }: { index: number }) {
  return (
    <article className="testimonial-placeholder">
      <MessageCircle aria-hidden="true" size={25} />
      <span>ESPAÇO RESERVADO</span>
      <p>[DEPOIMENTO REAL {String(index).padStart(2, "0")}]</p>
      <small>Será inserido somente após autorização e validação de uma experiência real.</small>
    </article>
  );
}

function VACStep({ letter, title, tone, icon: Icon, children }: {
  letter: string;
  title: string;
  tone: "blue" | "yellow" | "green";
  icon: LucideIcon;
  children: ReactNode;
}) {
  return (
    <article className={`vac-step vac-step--${tone}`}>
      <div className="vac-step__top"><span>{letter}</span><Icon aria-hidden="true" size={25} /></div>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

function ProductDeliverable({ icon: Icon, title, text, tag }: {
  icon: LucideIcon;
  title: string;
  text: string;
  tag?: string;
}) {
  return (
    <article className="deliverable-card">
      <div className="deliverable-card__icon"><Icon aria-hidden="true" size={24} /></div>
      {tag && <span>{tag}</span>}
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function BonusCard({ icon: Icon, number, title, text }: {
  icon: LucideIcon;
  number: string;
  title: string;
  text: string;
}) {
  return (
    <article className="bonus-card">
      <div className="bonus-card__top"><span>BÔNUS #{number}</span><Icon aria-hidden="true" size={22} /></div>
      <h3>{title}</h3>
      <p>{text}</p>
      <strong><Gift aria-hidden="true" size={15} /> BÔNUS INCLUÍDO</strong>
    </article>
  );
}

function GuaranteeCard() {
  return (
    <section className="guarantee section-pad section-pad--small">
      <div className="container">
        <Reveal className="guarantee-card">
          <div className="guarantee-card__seal"><ShieldCheck aria-hidden="true" size={46} /><span>30</span><small>DIAS</small></div>
          <div>
            <span className="section-kicker">GARANTIA PRIMEIRA MISSÃO</span>
            <h2>Teste o sistema dentro da realidade da sua família.</h2>
            <p>Monte sua primeira missão, conheça os materiais e experimente o VAC. Se, dentro de 30 dias, concluir que o Projeto Missão Aprender não faz sentido para você, poderá solicitar o reembolso conforme as regras da garantia e receber 100% do valor pago.</p>
            <small>A garantia é sobre sua decisão de compra. Ela não está vinculada a redução de crises, mudança comportamental ou qualquer resultado clínico.</small>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const faqs = [
  ["Meu filho não segue nenhuma rotina. Serve para ele?", "O sistema não começa tentando organizar o dia inteiro. Você escolhe uma única situação, monta de 2 a 4 passos e observa como a criança responde."],
  ["E se meu filho não entender os desenhos?", "Você pode trocar imagens, simplificar a sequência e utilizar fotos reais da criança, dos objetos, das pessoas ou dos ambientes da própria casa."],
  ["E se ele não aceitar de primeira?", "A proposta é observar, repetir e ajustar, sem prometer uma resposta específica. É possível diminuir etapas, trocar imagens e testar outra forma de apresentação."],
  ["Preciso imprimir tudo?", "Não. O projeto inclui recursos para impressão, versão econômica e possibilidades de uso diretamente no celular."],
  ["Preciso entender de autismo ou ter formação profissional?", "Não para utilizar o material como apoio à rotina familiar. Ainda assim, ele não substitui avaliação ou orientação individualizada de profissionais habilitados."],
  ["Isso é terapia?", "Não. É um material educacional e de apoio à rotina. Não é tratamento e não substitui acompanhamento médico ou terapêutico."],
  ["O Projeto Missão Aprender acaba com crises?", "Não existe essa promessa. A proposta é ajudar o adulto a observar padrões, tornar transições mais claras e preparar melhor situações que costumam gerar tensão."],
  ["Quanto tempo preciso por dia?", "A implementação foi desenhada para acontecer uma missão por vez. A duração de cada aplicação depende da situação e da realidade de cada família."],
  ["E se eu não gostar?", "Você conta com a Garantia Primeira Missão de 30 dias e pode solicitar o reembolso conforme as regras apresentadas na compra."],
  ["Meu filho é muito diferente. Como sei se vai servir?", "O sistema se adapta à criança: é possível simplificar, alterar etapas, trocar imagens, usar fotos, repetir, observar e ajustar. Não existe uma única configuração universal."],
];

function FAQAccordion() {
  return (
    <section className="faq section-pad">
      <div className="container faq__grid">
        <Reveal className="faq__intro">
          <span className="section-kicker">DÚVIDAS REAIS, RESPOSTAS DIRETAS</span>
          <h2>Antes de começar, você precisa se sentir segura com a decisão.</h2>
          <p>Sem promessas mágicas. Sem tentar encaixar toda criança na mesma rotina.</p>
        </Reveal>
        <Reveal className="faq__list">
          {faqs.map(([question, answer]) => (
            <details key={question} className="faq-item">
              <summary>{question}<ChevronDown aria-hidden="true" size={20} /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function PricingCard() {
  return (
    <section id="oferta" className="pricing section-pad">
      <div className="container pricing__grid">
        <Reveal className="pricing__copy">
          <span className="section-kicker">TURMA FUNDADORA</span>
          <h2>Você não precisa consertar o dia inteiro. Comece pelo momento que mais pesa.</h2>
          <p>Entre na primeira turma para escolher, montar, testar e ajustar sua primeira Missão Visual com um caminho simples de 7 dias.</p>
          <ul>
            <li><Check aria-hidden="true" size={18} /> Projeto Missão Aprender completo</li>
            <li><Check aria-hidden="true" size={18} /> 6 Missões Visuais prontas</li>
            <li><Check aria-hidden="true" size={18} /> Recursos impressos, econômicos e para celular</li>
            <li><Check aria-hidden="true" size={18} /> 5 bônus para personalizar e aplicar</li>
            <li><Check aria-hidden="true" size={18} /> Garantia Primeira Missão de 30 dias</li>
          </ul>
        </Reveal>

        <Reveal className="price-card">
          <span className="price-card__tag">Preço especial da Turma Fundadora</span>
          <p>Preço oficial</p>
          <del>R$47</del>
          <div className="price-card__price"><small>por</small><strong>R$37</strong></div>
          <p className="price-card__note">pagamento único</p>
          <HighConversionCTA compact />
          <SecurityMicrocopy />
          <div id="checkout-pendente" className="checkout-placeholder">
            <LockKeyhole aria-hidden="true" size={16} />
            <span>[LINK OFICIAL DO CHECKOUT SERÁ CONECTADO AQUI]</span>
          </div>
          <div className="access-note">
            <p><strong>Plataforma de acesso:</strong> [A DEFINIR]</p>
            <p><strong>Prazo de acesso:</strong> [A DEFINIR]</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div><strong>Projeto Missão Aprender</strong><p>Uma missão por vez. Uma rotina mais visível.</p></div>
          <div className="footer__links"><a href="#faq">Dúvidas frequentes</a><a href="#oferta">Oferta</a><span>[TERMOS DE USO]</span><span>[POLÍTICA DE PRIVACIDADE]</span></div>
        </div>
        <div className="footer__disclaimer">
          <ShieldCheck aria-hidden="true" size={21} />
          <p><strong>Material educacional e de apoio à rotina.</strong> Não substitui avaliação, terapia, acompanhamento médico ou orientação individualizada de profissionais habilitados.</p>
        </div>
        <p className="footer__legal">Antes da comercialização definitiva, o conteúdo relacionado a autismo e situações sensíveis deverá passar por revisão técnica de profissional habilitado. Imagens e relatos identificáveis de crianças somente poderão ser usados mediante consentimento expresso do responsável.</p>
        <small>© 2026 Projeto Missão Aprender. Todos os direitos reservados.</small>
      </div>
    </footer>
  );
}

export default function Home() {
  const deliverables: Array<{ icon: LucideIcon; title: string; text: string; tag?: string }> = [
    { icon: Search, title: "Radar das Missões", text: "Identifique qual momento da rotina merece atenção primeiro.", tag: "ONDE COMEÇAR" },
    { icon: PencilRuler, title: "Construtor da Primeira Missão", text: "Transforme a situação escolhida em uma sequência visual de 2 a 4 passos.", tag: "COMO MONTAR" },
    { icon: Images, title: "Cartas Visuais", text: "Recursos prontos para apoiar a montagem das Missões Visuais.", tag: "O QUE MOSTRAR" },
    { icon: Route, title: "Método VAC", text: "Use a lógica Ver → Antecipar → Concluir durante a aplicação.", tag: "COMO APLICAR" },
    { icon: LayoutGrid, title: "6 Missões Prontas", text: "Modelos para momentos frequentes como tela, banho, saída e sono." },
    { icon: CalendarDays, title: "Plano Primeira Missão: 7 Dias", text: "Escolha, observe, monte, apresente, repita, ajuste e decida como continuar." },
    { icon: Video, title: "Vídeos curtos de demonstração", text: "Veja o mecanismo aplicado de forma visual e direta." },
  ];

  const bonuses: Array<{ icon: LucideIcon; number: string; title: string; text: string }> = [
    { icon: Camera, number: "1", title: "Minha Missão", text: "Templates personalizáveis para usar fotos reais de familiares, objetos, ambientes e atividades da própria casa." },
    { icon: Smartphone, number: "2", title: "Missão no Celular", text: "Versões digitais para carro, passeio, consulta, viagem e outros momentos em que imprimir não é prático." },
    { icon: RefreshCcw, number: "3", title: "Mudou a Missão", text: "Recursos visuais para esperar, acabou, mudança de plano, primeiro/depois e hoje será diferente." },
    { icon: Users, number: "4", title: "Time da Missão", text: "Um guia rápido para mãe, pai, avós, babá, escola e outros cuidadores usarem a mesma lógica visual." },
    { icon: Route, number: "5", title: "Missões de Transição", text: "Pacote focado em tela, brinquedos, saída, carro, banho e início da rotina do sono." },
  ];

  return (
    <main>
      <StickyTopBar />

      <section className="hero section-pad">
        <div className="container hero__grid">
          <Reveal className="hero__copy">
            <div className="eyebrow"><Eye aria-hidden="true" size={17} /> APOIO VISUAL PARA A ROTINA FAMILIAR</div>
            <h1>Antes de repetir a mesma ordem mais uma vez, <em>torne o próximo passo visível.</em></h1>
            <p className="hero__lead">Transforme momentos como banho, tela, saída e sono em pequenas <strong>Missões Visuais</strong> que ajudam a criança a visualizar melhor o agora, o depois e quando aquela sequência termina.</p>
            <div className="hero__proofline">
              <span><CheckCircle2 aria-hidden="true" size={17} /> Uma missão por vez</span>
              <span><CheckCircle2 aria-hidden="true" size={17} /> Aplicação guiada</span>
              <span><CheckCircle2 aria-hidden="true" size={17} /> Adaptável à criança</span>
            </div>
            <HighConversionCTA />
            <p className="hero__context">Criado para famílias que querem começar com clareza, sem tentar organizar o dia inteiro de uma vez.</p>
          </Reveal>
          <Reveal className="hero__media"><ProductHeroVisual /></Reveal>
        </div>
      </section>

      <section className="video-strip section-pad section-pad--small">
        <div className="container video-strip__grid">
          <Reveal><VSLPlaceholder /></Reveal>
          <Reveal className="video-strip__copy">
            <span className="section-kicker">A ROTINA INVISÍVEL</span>
            <h2>Você vê a sequência inteira. Seu filho pode estar vendo apenas a interrupção.</h2>
            <p>Quando o dia depende só da voz do adulto, “vamos tomar banho” pode chegar como um fim inesperado da tela, sem mostrar com clareza o que acontece depois.</p>
            <div className="mini-flow" aria-label="Ciclo da rotina reativa"><span>ordem</span><ArrowRight aria-hidden="true" size={16} /><span>repetição</span><ArrowRight aria-hidden="true" size={16} /><strong>tensão</strong></div>
            <ArrowDown className="flow-down" aria-hidden="true" size={20} />
            <div className="mini-flow mini-flow--positive" aria-label="Ciclo da rotina visual"><span>visualizar</span><ArrowRight aria-hidden="true" size={16} /><span>antecipar</span><ArrowRight aria-hidden="true" size={16} /><strong>concluir</strong></div>
          </Reveal>
        </div>
      </section>

      <section className="pain section-pad">
        <div className="container">
          <Reveal className="section-heading section-heading--center">
            <span className="section-kicker">ISSO ACONTECE AÍ TAMBÉM?</span>
            <h2>Quantas vezes você precisa repetir a mesma coisa antes de uma tarefa simples virar um grande desgaste?</h2>
            <p>“Desliga a tela.” “Vamos tomar banho.” “Já falei.” “Vamos logo.” Aos poucos, uma pequena mudança de atividade pode pesar para vocês dois.</p>
          </Reveal>
          <div className="pain__grid">
            <PainCard number="01" title="Tela → banho" text="O fim da atividade chega sem uma referência clara do próximo passo." />
            <PainCard number="02" title="Brincar → guardar" text="A sequência existe na cabeça do adulto, mas ainda não está visível." />
            <PainCard number="03" title="Casa para saída" text="A mudança começa antes da porta e pode ser preparada antes." />
          </div>
          <Reveal className="belief-card">
            <span>UMA NOVA FORMA DE COMEÇAR</span>
            <h2>Antes de tentar corrigir o comportamento, torne a rotina visível.</h2>
            <p>Previsibilidade antes da cobrança. Clareza antes do conflito.</p>
          </Reveal>
        </div>
      </section>

      <FounderStory />

      <InstagramCommunity />

      <section className="proof section-pad section-pad--small">
        <div className="container">
          <Reveal className="section-heading section-heading--center">
            <span className="section-kicker">PROVAS REAIS, QUANDO ELAS EXISTIREM</span>
            <h2>A Turma Fundadora também nasce para ouvir, ajustar e validar.</h2>
            <p>Os espaços abaixo só receberão relatos verdadeiros, autorizados e apresentados como experiências individuais.</p>
          </Reveal>
          <div className="proof__grid"><TestimonialPlaceholder index={1} /><TestimonialPlaceholder index={2} /><TestimonialPlaceholder index={3} /></div>
          <Reveal className="proof__cta"><HighConversionCTA /></Reveal>
        </div>
      </section>

      <section className="vac section-pad">
        <div className="container">
          <Reveal className="section-heading section-heading--center">
            <span className="section-kicker">O MÉTODO PRÓPRIO</span>
            <h2>VAC: Ver, Antecipar e Concluir</h2>
            <p>Você não recebe arquivos soltos. Recebe uma lógica simples para observar a situação, mostrar o próximo passo e dar uma referência clara de encerramento.</p>
          </Reveal>
          <div className="vac__grid">
            <VACStep letter="V" title="VER" tone="blue" icon={Eye}>Observe onde a tensão começa, qual transição está acontecendo e quais pistas visuais fazem sentido.</VACStep>
            <VACStep letter="A" title="ANTECIPAR" tone="yellow" icon={ArrowRight}>Mostre visualmente o próximo passo antes da mudança acontecer.</VACStep>
            <VACStep letter="C" title="CONCLUIR" tone="green" icon={CheckCircle2}>Dê uma referência visual clara de que aquela etapa ou sequência terminou.</VACStep>
          </div>
          <Reveal className="vac__memory"><span>VER</span><ArrowRight aria-hidden="true" /><span>ANTECIPAR</span><ArrowRight aria-hidden="true" /><span>CONCLUIR</span></Reveal>
        </div>
      </section>

      <section className="mechanism section-pad">
        <div className="container mechanism__grid">
          <Reveal><MissionDemo compact /></Reveal>
          <Reveal className="mechanism__copy">
            <span className="section-kicker">NÃO É SÓ UM MONTE DE CARTÕES</span>
            <h2>Os cartões são ferramentas. A missão é o mecanismo.</h2>
            <p>Uma Missão Visual transforma um momento específico em uma pequena sequência compreensível, previsível e ajustável.</p>
            <div className="mechanism__steps">
              <div><strong>ONDE começar</strong><span>Com o momento que mais pesa.</span></div>
              <div><strong>O QUE mostrar</strong><span>Com poucos passos visuais.</span></div>
              <div><strong>COMO aplicar</strong><span>Usando o VAC.</span></div>
              <div><strong>COMO adaptar</strong><span>Simplificando, trocando imagens ou usando fotos.</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="logic section-pad section-pad--small">
        <div className="container logic__grid">
          <Reveal className="logic__headline"><span className="section-kicker">A LÓGICA NA PRÁTICA</span><h2>Menos “já falei”. Mais “deixa eu te mostrar o que vem depois”.</h2></Reveal>
          <Reveal className="logic__cards">
            <div><Eye aria-hidden="true" /><h3>A sequência fica observável</h3><p>O que antes existia principalmente na cabeça e na voz do adulto ganha uma referência visual.</p></div>
            <div><ArrowRight aria-hidden="true" /><h3>O próximo passo é antecipado</h3><p>A mudança pode ser apresentada antes do momento de transição.</p></div>
            <div><CheckCircle2 aria-hidden="true" /><h3>O fim ganha uma referência</h3><p>“Concluído” mostra visualmente que a pequena missão terminou.</p></div>
          </Reveal>
          <p className="logic__disclaimer">Essa é a lógica operacional do sistema. A resposta é individual e a aplicação deve ser observada e ajustada, sem garantia de mudança comportamental.</p>
        </div>
      </section>

      <section className="deliverables section-pad">
        <div className="container">
          <Reveal className="section-heading section-heading--center">
            <span className="section-kicker">UM SISTEMA COMPLETO PARA SAIR DO ZERO</span>
            <h2>Você recebe o caminho, os recursos e a primeira missão pronta para acontecer.</h2>
          </Reveal>
          <Reveal className="contents-showcase">
            <div className="contents-showcase__image">
              <img
                src="images/rotina-mais-leve-kit-v2.webp"
                alt="Representação ilustrativa do kit Rotina Mais Leve com acesso digital, materiais para imprimir, quadro de missão, cartões e método VAC"
                width={1536}
                height={1024}
                loading="lazy"
              />
              <span>VISÃO COMPLETA DO QUE VOCÊ RECEBE</span>
            </div>
            <div className="contents-showcase__copy">
              <span className="section-kicker">POR DENTRO DO MATERIAL</span>
              <h3>Veja o que você recebe e como cada peça se conecta.</h3>
              <p>O guia, os cartões, as sequências e a versão para celular formam um conjunto prático para você sair da dúvida e montar sua primeira missão visual.</p>
              <div>
                <span><CheckCircle2 aria-hidden="true" size={16} /> Pronto para imprimir</span>
                <span><CheckCircle2 aria-hidden="true" size={16} /> Adaptável com fotos</span>
                <span><CheckCircle2 aria-hidden="true" size={16} /> Uso também no celular</span>
              </div>
            </div>
          </Reveal>
          <div className="deliverables__grid">{deliverables.map((item) => <ProductDeliverable key={item.title} {...item} />)}</div>
          <Reveal className="seven-days">
            <span>PLANO PRIMEIRA MISSÃO</span>
            <h3>7 dias para escolher, montar, testar e ajustar. Não para prometer um comportamento.</h3>
            <div className="seven-days__track">{["Escolher", "Observar", "Montar", "Apresentar", "Repetir", "Ajustar", "Continuar"].map((day, i) => <div key={day}><span>{i + 1}</span><strong>{day}</strong></div>)}</div>
          </Reveal>
        </div>
      </section>

      <section className="quick-cta">
        <div className="container quick-cta__grid">
          <Reveal><span>UMA MISSÃO. POUCOS PASSOS. UM COMEÇO POSSÍVEL.</span><h2>Você está a um passo de tornar o próximo momento mais visível.</h2></Reveal>
          <Reveal><HighConversionCTA compact light /></Reveal>
        </div>
      </section>

      <section className="audience section-pad">
        <div className="container">
          <Reveal className="section-heading section-heading--center"><span className="section-kicker">PARA QUEM É E PARA QUEM NÃO É</span><h2>Um apoio prático, com uma promessa responsável.</h2></Reveal>
          <div className="audience__grid">
            <Reveal className="audience-card audience-card--yes">
              <CheckCircle2 aria-hidden="true" size={30} /><h3>Faz sentido para você que…</h3>
              <ul><li>quer começar por uma situação real da rotina;</li><li>busca reduzir a dependência exclusiva de ordens verbais;</li><li>entende que será preciso observar, testar e ajustar;</li><li>quer alinhar a mesma lógica entre cuidadores;</li><li>procura um material educacional, não uma promessa clínica.</li></ul>
            </Reveal>
            <Reveal className="audience-card audience-card--no">
              <CircleX aria-hidden="true" size={30} /><h3>Não é o produto certo se você…</h3>
              <ul><li>procura uma rotina rígida e universal;</li><li>espera resultado comportamental garantido;</li><li>busca tratamento ou substituição de terapia;</li><li>quer fazer a criança se adaptar a um sistema pronto;</li><li>não pretende observar nem personalizar a aplicação.</li></ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="modules section-pad section-pad--small">
        <div className="container modules__grid">
          <Reveal className="modules__intro"><span className="section-kicker">POR DENTRO DO PROJETO</span><h2>Do momento que pesa à primeira missão ajustada.</h2><p>Cada parte existe para responder a uma pergunta prática: onde começar, o que mostrar, como aplicar e como adaptar.</p></Reveal>
          <Reveal className="modules__list">
            {[
              ["01", "Encontre a missão certa", "Use o Radar das Missões para escolher um ponto específico da rotina."],
              ["02", "Monte poucos passos", "Transforme o momento em uma sequência simples de 2 a 4 referências visuais."],
              ["03", "Aplique com o VAC", "Observe, antecipe o próximo passo e dê uma indicação de conclusão."],
              ["04", "Leia a resposta e ajuste", "Troque imagens, use fotos, simplifique etapas ou repita a missão."],
            ].map(([n, title, text]) => <details key={n} className="module-item"><summary><span>{n}</span>{title}<ChevronDown aria-hidden="true" size={19} /></summary><p>{text}</p></details>)}
          </Reveal>
        </div>
      </section>

      <section className="bonuses section-pad">
        <div className="container">
          <Reveal className="section-heading section-heading--center"><span className="section-kicker">BÔNUS QUE REMOVEM OBSTÁCULOS</span><h2>A vida real muda. A missão precisa conseguir mudar junto.</h2><p>Sem volume artificial: cada bônus ajuda a personalizar, transportar ou compartilhar a lógica do VAC.</p></Reveal>
          <div className="bonuses__grid">{bonuses.map((bonus) => <BonusCard key={bonus.number} {...bonus} />)}</div>
        </div>
      </section>

      <PricingCard />
      <GuaranteeCard />

      <div id="faq"><FAQAccordion /></div>

      <section className="final-cta section-pad">
        <div className="container final-cta__inner">
          <Reveal>
            <Sparkles aria-hidden="true" size={31} />
            <span className="section-kicker">COMECE PELO QUE MAIS PESA HOJE</span>
            <h2>De reagir à tensão para antecipar a rotina, uma missão por vez.</h2>
            <p>O sistema se adapta à criança. A criança não precisa se adaptar ao sistema.</p>
            <HighConversionCTA />
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
