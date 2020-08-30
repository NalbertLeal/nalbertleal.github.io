<script>
  import page from "page";
  // views
  import TimerView from "./views/TimerView.svelte";

  let baseURL = '/projects/pomodoro/public/build'
  let currentPage;

  page(baseURL, () => (currentPage = TimerView));

  page.start();
</script>

<svelte:component this={currentPage} />
