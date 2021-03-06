import { createComponent as _$createComponent } from "r-server";
import { ssr as _$ssr } from "r-server";
import { escape as _$escape } from "r-server";
import { getHydrationKey as _$getHydrationKey } from "r-server";
const _tmpl$ = ['<div data-hk="', '">', "</div>"];

const template1 = _$ssr(_tmpl$, _$getHydrationKey(), _$escape(simple));

const template2 = _$ssr(_tmpl$, _$getHydrationKey(), _$escape(state.dynamic));

const template3 = _$ssr(_tmpl$, _$getHydrationKey(), simple ? _$escape(good) : _$escape(bad));

const template4 = _$ssr(_tmpl$, _$getHydrationKey(), simple ? _$escape(good()) : _$escape(bad));

const template5 = _$ssr(
  _tmpl$,
  _$getHydrationKey(),
  state.dynamic ? _$escape(good()) : _$escape(bad)
);

const template6 = _$ssr(_tmpl$, _$getHydrationKey(), state.dynamic && _$escape(good()));

const template7 = _$ssr(
  _tmpl$,
  _$getHydrationKey(),
  state.count > 5 ? (state.dynamic ? _$escape(best) : _$escape(good())) : _$escape(bad)
);

const template8 = _$ssr(
  _tmpl$,
  _$getHydrationKey(),
  state.dynamic && state.something && _$escape(good())
);

const template9 = _$ssr(
  _tmpl$,
  _$getHydrationKey(),
  (state.dynamic && _$escape(good())) || _$escape(bad)
);

const template10 = _$ssr(
  _tmpl$,
  _$getHydrationKey(),
  state.a ? "a" : state.b ? "b" : state.c ? "c" : "fallback"
);

const template11 = _$ssr(
  _tmpl$,
  _$getHydrationKey(),
  state.a ? _$escape(a()) : state.b ? _$escape(b()) : state.c ? "c" : "fallback"
);

const template12 = _$createComponent(Comp, {
  get render() {
    return state.dynamic ? good() : bad;
  }
}); // no dynamic predicate

const template13 = _$createComponent(Comp, {
  get render() {
    return state.dynamic ? good : bad;
  }
});

const template14 = _$createComponent(Comp, {
  get render() {
    return state.dynamic && good();
  }
}); // no dynamic predicate

const template15 = _$createComponent(Comp, {
  get render() {
    return state.dynamic && good;
  }
});

const template16 = _$createComponent(Comp, {
  get render() {
    return state.dynamic || good();
  }
});
