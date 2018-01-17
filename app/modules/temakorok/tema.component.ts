export class TemaComponent {
  meta: any;

  constructor(
    router,
    appService
  ) {
    this.meta = appService.getTopic(router.url);
  }
}
