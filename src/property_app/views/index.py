from property_app.lib.inertia import InertiaRequest, InertiaHTTPEndpoint


class Index(InertiaHTTPEndpoint):
    def get(self, request: InertiaRequest):
        return {}