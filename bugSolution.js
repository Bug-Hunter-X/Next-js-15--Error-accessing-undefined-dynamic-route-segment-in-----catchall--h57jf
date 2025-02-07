```javascript
// pages/[...catchall].js

export default function CatchAll({ params }) {
  console.log(params);
  const catchall = params.catchall;

  //Check if catchall array is empty before accessing it's elements
  return (
    <div>
      {catchall.length > 0 ? (
        <h1>Catch-all route: {catchall.join('/')}</h1>
      ) : (
        <h1>Welcome to the homepage</h1>
      )}
    </div>
  );
}
```