import { HttpClientTestingModule } from "@angular/common/http/testing";
import { SecurityContext } from "@angular/core";
import { MediaChange } from "@angular/flex-layout";
import { SafeResourceUrl, SafeValue } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { Observable, Subscription, of } from "rxjs";

import { ReactiveFormsModule } from "@angular/forms"
import { NoopAnimationsModule } from "@angular/platform-browser/animations"
import { MaterialModule } from "../material.module"

const FAKE_SVGS = {
    lemon: '<svg><path id="lemon" name="lemon"></path></svg>',
}

export class MediaObserverFake {
    isActive(query: string): boolean {
        return false;
    }

    asObservable(): Observable<MediaChange> {
        return of({} as MediaChange);
    }

    subscribe(
        next?: (value: MediaChange) => void,
        error?: (error: any) => void,
        complete?: () => void
    ): Subscription {
        return new Subscription();
    }
}

export class MatIconRegistryFake {
    _document = document;
    
    addSvgIcon(iconName: string, url: SafeResourceUrl): this {
        return this
    }

    getNamedSvgIcon(name: string, namespace: string = ''): Observable<SVGAElement> {
        return of(this._svgElementFromString(FAKE_SVGS.lemon))
    }

    private _svgElementFromString(str: string): SVGAElement | any {
        const div = (this._document || document)
            .createElement('div')

        div.innerHTML = str;

        const svg = div.querySelector('svg') as SVGAElement | any;

        if (!svg) {
            throw Error('<svg> tag não encontrada');            
        }

        return svg
    }
}

export class DomSanitizerFake {
    bypassSecurityTrustResourceUrl(url: string): SafeResourceUrl {
        return {} as SafeResourceUrl
    }

    sanitize(
        context: SecurityContext,
        value: SafeValue | string | null
    ): string | null {
        return value?.toString() || null
    }
}

export const commonTestingProviders: any[] = []

export const commonTestingModules: any[] = [
    ReactiveFormsModule,
    MaterialModule,
    NoopAnimationsModule,
    HttpClientTestingModule,
    RouterTestingModule,
]