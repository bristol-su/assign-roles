@extends('bristolsu::base')

@section('content')
    <div id="assign-roles-root">
        @yield('module-content')
    </div>
@endsection

@push('styles')
    <link href="{{ asset('modules/assign-roles/css/module.css') }}" rel="stylesheet">
@endpush

@push('scripts')
    <script src="{{ asset('modules/assign-roles/js/module.js') }}"></script>
@endpush
