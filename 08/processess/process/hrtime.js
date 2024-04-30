const { hrtime } = require('node:process');

const start = hrtime.bigint();
// 191051479007711n

setTimeout(() => {
  const end = hrtime.bigint();
  // 191052633396993n

  const diff = end - start;
  console.log(`Benchmark took ${diff} nanoseconds`);
  console.log(`Benchmark took ${Math.round(Number(diff / 1000n))} microseconds`);
  console.log(`Benchmark took ${Math.round(Number(diff / 1000_000n))} milliseconds`);
  // Benchmark took 1154389282 nanoseconds
}, 1000);