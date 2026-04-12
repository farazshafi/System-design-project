import http from "k6/http";
import { check } from "k6";

export let options = {
  vus: 500, // virtual users
  duration: '30s',
};

export default function () {
  const payload = JSON.stringify({
    type: "click",
    payload: { userId: Math.floor(Math.random() * 1000) }
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const port = __ENV.PORT || 5000;
  const res = http.post(`http://localhost:${port}/events`, payload, params);

  check(res, {
    'status is 200 or 201': (r) => r.status === 200 || r.status === 201,
  });
}
