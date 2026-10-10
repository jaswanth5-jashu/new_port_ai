import React from 'react';

function createIcon(name, paths) {
  const Icon = React.forwardRef(({ size = 24, className = '', color = 'currentColor', strokeWidth = 2, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`lucide lucide-${name} ${className}`}
        aria-hidden="true"
        {...props}
      >
        {paths.map(([tag, attrs], idx) => React.createElement(tag, { ...attrs, key: attrs.key || idx }))}
      </svg>
    );
  });
  Icon.displayName = name;
  return Icon;
}

export const ArrowDown = createIcon('arrow-down', [
  ['path', { d: 'M12 5v14' }],
  ['path', { d: 'm19 12-7 7-7-7' }]
]);

export const ArrowUpRight = createIcon('arrow-up-right', [
  ['path', { d: 'M7 7h10v10' }],
  ['path', { d: 'M7 17 17 7' }]
]);

export const Award = createIcon('award', [
  ['path', { d: 'm15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526' }],
  ['circle', { cx: '12', cy: '8', r: '6' }]
]);

export const BookOpen = createIcon('book-open', [
  ['path', { d: 'M12 7v14' }],
  ['path', { d: 'M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z' }]
]);

export const Bot = createIcon('bot', [
  ['path', { d: 'M12 8V4H8' }],
  ['rect', { width: '16', height: '12', x: '4', y: '8', rx: '2' }],
  ['path', { d: 'M2 14h2' }],
  ['path', { d: 'M20 14h2' }],
  ['path', { d: 'M15 13v2' }],
  ['path', { d: 'M9 13v2' }]
]);

export const BrainCircuit = createIcon('brain-circuit', [
  ['path', { d: 'M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z' }],
  ['path', { d: 'M9 13a4.5 4.5 0 0 0 3-4' }],
  ['path', { d: 'M6.003 5.125A3 3 0 0 0 6.401 6.5' }],
  ['path', { d: 'M3.477 10.896a4 4 0 0 1 .585-.396' }],
  ['path', { d: 'M6 18a4 4 0 0 1-1.967-.516' }],
  ['path', { d: 'M12 13h4' }],
  ['path', { d: 'M12 18h6a2 2 0 0 1 2 2v1' }],
  ['path', { d: 'M12 8h8' }],
  ['path', { d: 'M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z' }],
  ['path', { d: 'M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z' }],
  ['path', { d: 'M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z' }],
  ['path', { d: 'M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z' }]
]);

export const BriefcaseBusiness = createIcon('briefcase-business', [
  ['path', { d: 'M12 12h.01' }],
  ['path', { d: 'M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2' }],
  ['path', { d: 'M22 13a18.15 18.15 0 0 1-20 0' }],
  ['rect', { width: '20', height: '14', x: '2', y: '6', rx: '2' }]
]);

export const Check = createIcon('check', [
  ['path', { d: 'M20 6 9 17l-5-5' }]
]);

export const ChevronDown = createIcon('chevron-down', [
  ['path', { d: 'm6 9 6 6 6-6' }]
]);

export const CloudCog = createIcon('cloud-cog', [
  ['path', { d: 'm10.852 19.772-.383.924' }],
  ['path', { d: 'm13.148 14.228-.383.924' }],
  ['path', { d: 'm13.528 19.39.924-.383' }],
  ['path', { d: 'm7.972 17.078.924-.383' }],
  ['path', { d: 'm8.352 19.39-.924-.383' }],
  ['path', { d: 'm13.908 17.078-.924-.383' }],
  ['path', { d: 'm9.617 14.61-.383-.924' }],
  ['path', { d: 'm11.913 20.16-.383-.924' }],
  ['path', { d: 'M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2' }],
  ['circle', { cx: '11.5', cy: '17.5', r: '1.5' }]
]);

export const CodeXml = createIcon('code-xml', [
  ['path', { d: 'm18 16 4-4-4-4' }],
  ['path', { d: 'm6 8-4 4 4 4' }],
  ['path', { d: 'm14.5 4-5 16' }]
]);

export const Download = createIcon('download', [
  ['path', { d: 'M12 15V3' }],
  ['path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' }],
  ['path', { d: 'm7 10 5 5 5-5' }]
]);

export const Github = createIcon('github', [
  ['path', { d: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' }],
  ['path', { d: 'M9 18c-4.51 2-5-2-7-2' }]
]);

export const GraduationCap = createIcon('graduation-cap', [
  ['path', { d: 'M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z' }],
  ['path', { d: 'M22 10v6' }],
  ['path', { d: 'M6 12.5V16a6 3 0 0 0 12 0v-3.5' }]
]);

export const ImageIcon = createIcon('image', [
  ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', ry: '2' }],
  ['circle', { cx: '9', cy: '9', r: '2' }],
  ['path', { d: 'm21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21' }]
]);

export const Instagram = createIcon('instagram', [
  ['rect', { width: '20', height: '20', x: '2', y: '2', rx: '5', ry: '5' }],
  ['path', { d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' }],
  ['line', { x1: '17.5', x2: '17.51', y1: '6.5', y2: '6.5' }]
]);

export const FileText = createIcon('file-text', [
  ['path', { d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z' }],
  ['path', { d: 'M14 2v4a2 2 0 0 0 2 2h4' }],
  ['path', { d: 'M10 9H8' }],
  ['path', { d: 'M16 13H8' }],
  ['path', { d: 'M16 17H8' }]
]);

export const Linkedin = createIcon('linkedin', [
  ['path', { d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' }],
  ['rect', { width: '4', height: '12', x: '2', y: '9' }],
  ['circle', { cx: '4', cy: '4', r: '2' }]
]);

export const Mail = createIcon('mail', [
  ['rect', { width: '20', height: '16', x: '2', y: '4', rx: '2' }],
  ['path', { d: 'm22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7' }]
]);

export const Map = createIcon('map', [
  ['path', { d: 'M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z' }],
  ['path', { d: 'M15 5.764v15' }],
  ['path', { d: 'M9 3.236v15' }]
]);

export const Menu = createIcon('menu', [
  ['path', { d: 'M4 12h16' }],
  ['path', { d: 'M4 6h16' }],
  ['path', { d: 'M4 18h16' }]
]);

export const Network = createIcon('network', [
  ['rect', { x: '16', y: '16', width: '6', height: '6', rx: '1' }],
  ['rect', { x: '2', y: '16', width: '6', height: '6', rx: '1' }],
  ['rect', { x: '9', y: '2', width: '6', height: '6', rx: '1' }],
  ['path', { d: 'M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3' }],
  ['path', { d: 'M12 12V8' }]
]);

export const Send = createIcon('send', [
  ['path', { d: 'M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z' }],
  ['path', { d: 'm21.854 2.147-10.94 10.94' }]
]);

export const Sparkles = createIcon('sparkles', [
  ['path', { d: 'M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z' }],
  ['path', { d: 'M20 2v4' }],
  ['path', { d: 'M22 4h-4' }],
  ['circle', { cx: '4', cy: '20', r: '1' }]
]);

export const SquareTerminal = createIcon('square-terminal', [
  ['path', { d: 'm7 11 2-2-2-2' }],
  ['path', { d: 'M11 13h4' }],
  ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }]
]);

export const UserRound = createIcon('user-round', [
  ['circle', { cx: '12', cy: '8', r: '5' }],
  ['path', { d: 'M20 21a8 8 0 0 0-16 0' }]
]);

export const Workflow = createIcon('workflow', [
  ['rect', { width: '8', height: '8', x: '3', y: '3', rx: '2' }],
  ['path', { d: 'M7 11v4a2 2 0 0 0 2 2h4' }],
  ['rect', { width: '8', height: '8', x: '13', y: '13', rx: '2' }]
]);

export const X = createIcon('x', [
  ['path', { d: 'M18 6 6 18' }],
  ['path', { d: 'm6 6 12 12' }]
]);

export const ChevronLeft = createIcon('chevron-left', [
  ['path', { d: 'm15 18-6-6 6-6' }]
]);

export const ChevronRight = createIcon('chevron-right', [
  ['path', { d: 'm9 18 6-6-6-6' }]
]);

export const Images = createIcon('images', [
  ['path', { d: 'M18 22H4a2 2 0 0 1-2-2V6' }],
  ['path', { d: 'm22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18' }],
  ['circle', { cx: '12', cy: '8', r: '2' }],
  ['rect', { width: '16', height: '16', x: '6', y: '2', rx: '2' }]
]);
