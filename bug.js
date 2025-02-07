```javascript
// pages/index.js

export default function Home() {
  return (
    <div>Hello</div>
  );
}
```

This simple Next.js 15 app produces a runtime error if you try to access a dynamic route segment that isn't defined.  For example, if your `pages` directory contains `pages/[...catchall].js`,  and you try to navigate to `/hello`, the `params.catchall` will be an empty array, and trying to access it like `params.catchall[0]` would throw an error if `params.catchall` is not checked for length first.