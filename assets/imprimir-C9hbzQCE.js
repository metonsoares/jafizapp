function i(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const s=`
  * { box-sizing: border-box; margin: 0; }
  body { font-family: Arial, Helvetica, sans-serif; color: #1c2b33; background: #fff; padding: 0; }
  .topo { display: flex; align-items: center; gap: 10px; padding: 16px 24px; background: #12b57a; color: #fff; }
  .topo .logo { font-size: 20px; font-weight: 800; }
  .topo .sub { font-size: 12px; opacity: .9; margin-left: auto; text-align: right; }
  main { padding: 20px 24px; }
  h1 { font-size: 20px; margin-bottom: 2px; }
  h2 { font-size: 14px; margin: 18px 0 8px; text-transform: uppercase; letter-spacing: .04em; color: #12b57a; }
  .muted { color: #5f6f6a; font-size: 12px; }
  .kpis { display: flex; gap: 10px; margin-top: 12px; flex-wrap: wrap; }
  .kpi { border: 1px solid #e3e8e6; border-radius: 10px; padding: 10px 14px; min-width: 120px; }
  .kpi b { display: block; font-size: 20px; }
  table { width: 100%; border-collapse: collapse; font-size: 12px; }
  th { text-align: left; padding: 6px 8px; border-bottom: 2px solid #12b57a; text-transform: uppercase; font-size: 10px; letter-spacing: .04em; color: #5f6f6a; }
  td { padding: 6px 8px; border-bottom: 1px solid #eef1f0; }
  tr:nth-child(even) td { background: #fafcfb; }
  .ok { color: #0e8a5f; font-weight: 700; }
  .ruim { color: #c0344b; font-weight: 700; }
  .rodape { margin-top: 22px; padding-top: 10px; border-top: 1px solid #e3e8e6; font-size: 10px; color: #8a9691; }
  .poster { text-align: center; padding: 40px 24px; }
  .poster h1 { font-size: 28px; }
  .poster img { width: 320px; height: 320px; margin: 24px auto; display: block; }
  .poster .passos { text-align: left; max-width: 420px; margin: 0 auto; font-size: 14px; line-height: 1.7; }
  .poster .qrs { display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; margin: 24px 0; }
  .poster .qrs figure { margin: 0; }
  .poster .qrs img { width: 240px; height: 240px; margin: 0 auto 10px; }
  .poster .qrs figcaption { font-size: 15px; font-weight: 700; }
  .poster .qrs figcaption span { display: block; font-size: 12px; font-weight: 400; color: #5f6f6a; }
  @media print { .topo { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
`;function a(t,r,o){const e=window.open("","_blank","width=900,height=720");if(!e)return!1;const p=o!=null&&o.cor&&/^#[0-9a-fA-F]{6}$/.test(o.cor)?o.cor:"#12b57a",n=o!=null&&o.logoUrl?`<img src="${i(o.logoUrl)}" alt="" style="height:34px;max-width:180px;object-fit:contain;background:#fff;border-radius:6px;padding:2px 6px">`+(o.nome?`<span class="logo">${i(o.nome)}</span>`:"")+'<span class="sub">Feito com Já Fiz ✓<br>www.jafizapp.com.br</span>':'<span class="logo">Já Fiz ✓</span><span class="sub">Checklists que provam o trabalho feito<br>www.jafizapp.com.br</span>';return e.document.write(`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>${i(t)}</title><style>${s}</style><style>.topo{background:${p}} h2{color:${p}} th{border-bottom-color:${p}}</style></head><body><div class="topo">${n}</div>`+r+"<script>window.onload = () => setTimeout(() => window.print(), 400);<\/script></body></html>"),e.document.close(),!0}export{a,i as e};
