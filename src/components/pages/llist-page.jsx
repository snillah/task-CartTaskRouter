import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function Listpage() {
  return (
    <>
      <div>I have list page</div>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
            <Typography>{index + 1}</Typography>
          </Grid>
        ))}
      </Grid>

      {/* container → tells MUI this Grid holds other items.

spacing={{ xs: 2, md: 3 }} → gap between items (2 units on small screens, 3 units on medium+).

columns={{ xs: 4, sm: 8, md: 12 }} → total number of grid columns changes by screen size.

item xs={2} sm={4} md={4} → each item takes:

2 of 4 columns (xs) → half width on extra-small screens

4 of 8 columns (sm) → half width on small screens

4 of 12 columns (md) → one-third width on medium+ screens


So with 6 items:

xs (4 cols) → 2 per row

sm (8 cols) → 2 per row

md (12 cols) → 3 per row */}
    </>
  );
}

export default Listpage;
