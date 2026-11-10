<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules

- Every decorative element is its own transparent image (src/assets/wedding/, WebP with alpha) rendered as a separate `<img>` with a unique `data-anim-id` and its own duration/delay/rotation — never a composite/flattened decoration image and never group animation. Enforced by src/test/wedding-audit.test.tsx.
- All invitation content comes from `src/components/wedding/config.ts`; never hardcode names, dates or venue elsewhere.
