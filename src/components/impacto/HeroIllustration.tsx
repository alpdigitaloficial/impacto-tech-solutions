import type { ReactNode } from "react";

/**
 * Ilustração técnica em SVG: computador central conectado a impressora,
 * roteador/Wi-Fi, SSD, componentes e ferramentas. Linhas finas com
 * pontos percorrendo as conexões.
 */
export function HeroIllustration({ className = "" }: { className?: string }) {
  const nodes: { x: number; y: number; label: string; icon: ReactNode }[] = [
    {
      x: 90,
      y: 80,
      label: "Impressora",
      icon: (
        <g>
          <rect x="-14" y="-4" width="28" height="14" rx="2" />
          <rect x="-9" y="-12" width="18" height="8" rx="1" />
          <rect x="-9" y="6" width="18" height="10" rx="1" />
        </g>
      ),
    },
    {
      x: 330,
      y: 66,
      label: "Wi-Fi / Roteador",
      icon: (
        <g>
          <rect x="-15" y="2" width="30" height="9" rx="2" />
          <path d="M-9 -2a13 13 0 0 1 18 0" />
          <path d="M-4 -8a7 7 0 0 1 8 0" />
        </g>
      ),
    },
    {
      x: 62,
      y: 250,
      label: "SSD",
      icon: (
        <g>
          <rect x="-15" y="-9" width="30" height="18" rx="2" />
          <path d="M-8 -3h16M-8 3h10" />
        </g>
      ),
    },
    {
      x: 352,
      y: 250,
      label: "Rede cabeada",
      icon: (
        <g>
          <rect x="-10" y="-10" width="20" height="14" rx="2" />
          <path d="M-4 4v8M4 4v8M-10 12h20" />
        </g>
      ),
    },
    {
      x: 208,
      y: 320,
      label: "Ferramentas técnicas",
      icon: (
        <g>
          <path d="M-12 12 2 -2" />
          <path d="M-2 -6a7 7 0 0 1 10 10l-4-4z" />
          <path d="M8 12 12 8" />
        </g>
      ),
    },
  ];

  const center = { x: 208, y: 176 };

  return (
    <div className={className}>
      <svg
        viewBox="0 0 416 380"
        className="h-auto w-full"
        role="img"
        aria-label="Ilustração de um computador conectado a impressora, roteador Wi-Fi, SSD, rede cabeada e ferramentas técnicas"
      >
        <defs>
          <radialGradient id="imp-glow" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="var(--glow)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--glow)" stopOpacity="0" />
          </radialGradient>
          <filter id="node-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <circle cx={center.x} cy={center.y} r="170" fill="url(#imp-glow)" />
        <circle
          cx={center.x}
          cy={center.y}
          r="132"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.12"
          strokeDasharray="3 7"
          className="anim-orbit"
        />

        {/* conexões */}
        <g stroke="var(--glow)" strokeOpacity="0.35" strokeWidth="1" fill="none">
          {nodes.map((n) => (
            <line key={n.label} x1={center.x} y1={center.y} x2={n.x} y2={n.y} />
          ))}
        </g>
        <g stroke="var(--glow)" strokeWidth="1.6" strokeLinecap="round" fill="none">
          {nodes.map((n, i) => (
            <line
              key={n.label}
              x1={center.x}
              y1={center.y}
              x2={n.x}
              y2={n.y}
              strokeDasharray="4 236"
              className="anim-dash"
              style={{ animationDelay: `${i * 1.1}s`, animationDuration: "6.5s" }}
            />
          ))}
        </g>

        {/* nós periféricos */}
        {nodes.map((n, i) => (
          <g
            key={n.label}
            className="group anim-float cursor-default"
            style={{ animationDelay: `${i * 0.8}s`, transformOrigin: `${n.x}px ${n.y}px` }}
          >
            <circle
              cx={n.x}
              cy={n.y}
              r="30"
              fill="var(--card)"
              stroke="currentColor"
              strokeOpacity="0.16"
              className="transition-all duration-300 group-hover:stroke-primary group-hover:[filter:url(#node-glow)]"
            />
            <g
              transform={`translate(${n.x} ${n.y})`}
              fill="none"
              stroke="var(--glow)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-300 group-hover:stroke-primary group-hover:[filter:url(#node-glow)]"
            >
              {n.icon}
            </g>
          </g>
        ))}

        {/* computador central */}
        <g>
          <rect
            x={center.x - 76}
            y={center.y - 58}
            width="152"
            height="98"
            rx="8"
            fill="var(--card)"
            stroke="currentColor"
            strokeOpacity="0.2"
          />
          <rect
            x={center.x - 64}
            y={center.y - 46}
            width="128"
            height="74"
            rx="4"
            fill="var(--ink)"
            stroke="var(--glow)"
            strokeOpacity="0.35"
          />
          <g stroke="var(--glow)" strokeOpacity="0.5" strokeWidth="1.4" strokeLinecap="round">
            <path d={`M${center.x - 50} ${center.y - 28}h34`} />
            <path d={`M${center.x - 50} ${center.y - 16}h58`} />
            <path d={`M${center.x - 50} ${center.y - 4}h24`} />
          </g>
          <g className="anim-pulse-soft" style={{ transformOrigin: `${center.x + 34}px ${center.y + 12}px` }}>
            <circle cx={center.x + 34} cy={center.y + 12} r="12" fill="none" stroke="var(--glow)" strokeOpacity="0.5" />
            <path
              d={`M${center.x + 27} ${center.y + 8}a9 9 0 1 0 14 0`}
              fill="none"
              stroke="var(--glow)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d={`M${center.x + 34} ${center.y + 3}v9`}
              stroke="var(--glow)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </g>
          <path
            d={`M${center.x - 16} ${center.y + 40}h32l6 18h-44z`}
            fill="var(--card)"
            stroke="currentColor"
            strokeOpacity="0.2"
          />
        </g>
      </svg>
    </div>
  );
}
