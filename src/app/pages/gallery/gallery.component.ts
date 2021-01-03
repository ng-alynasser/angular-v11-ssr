import { animate, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  album = [];
  options: NgxMasonryOptions = {
    initLayout: true,
    animations: {
      show: [
        style({ opacity: 0 }),
        animate('400ms ease-in', style({ opacity: 1 })),
      ],
      hide: [
        style({ opacity: '*' }),
        animate('400ms ease-in', style({ opacity: 0 })),
      ],
    },
  };

  masonryItems = [
    {
      image:
        'http://res.cloudinary.com/alynasser/image/upload/v1609434094/sageco-gallery/1_qdfq07.jpg',
    },
    {
      image:
        'http://res.cloudinary.com/alynasser/image/upload/v1609434146/sageco-gallery/3_e09sjx.jpg',
    },
    {
      image:
        'http://res.cloudinary.com/alynasser/image/upload/v1609434198/sageco-gallery/4_eh7nyc.jpg',
    },
    {
      image:
        'http://res.cloudinary.com/alynasser/image/upload/v1609434116/sageco-gallery/2_asnuj3.jpg',
    },
    {
      image:
        'http://res.cloudinary.com/alynasser/image/upload/v1609434157/sageco-gallery/5_qn9vzt.jpg',
    },
    {
      image:
        'http://res.cloudinary.com/alynasser/image/upload/v1609434234/sageco-gallery/6_ic2mxe.jpg',
    },
    {
      image:
        'http://res.cloudinary.com/alynasser/image/upload/v1609434201/sageco-gallery/7_drkocn.jpg',
    },
    {
      image:
        'http://res.cloudinary.com/alynasser/image/upload/v1609434226/sageco-gallery/8_bdo6tm.jpg',
    },
    {
      image:
        'http://res.cloudinary.com/alynasser/image/upload/v1609434199/sageco-gallery/9_uydfux.jpg',
    },
    {
      image:
        'http://res.cloudinary.com/alynasser/image/upload/v1609434428/sageco-gallery/10_gm5utj.jpg',
    },
    {
      image:
        'http://res.cloudinary.com/alynasser/image/upload/v1609434527/sageco-gallery/11_jzkd6k.jpg',
    },
    {
      image:
        'http://res.cloudinary.com/alynasser/image/upload/v1609434247/sageco-gallery/12_wuu1zn.jpg',
    },
    {
      image:
        'http://res.cloudinary.com/alynasser/image/upload/v1609434024/sageco-gallery/13_irssc3.jpg',
    },
    {
      image:
        'http://res.cloudinary.com/alynasser/image/upload/v1609433988/sageco-gallery/14_yaekzr.jpg',
    },
    {
      image:
        'http://res.cloudinary.com/alynasser/image/upload/v1609434011/sageco-gallery/15_jdtct8.jpg',
    },
    {
      image:
        'http://res.cloudinary.com/alynasser/image/upload/v1609434056/sageco-gallery/16_itc68u.jpg',
    },
    {
      image:
        'http://res.cloudinary.com/alynasser/image/upload/v1609434011/sageco-gallery/17_t4k3oj.jpg',
    },
    {
      image:
        'http://res.cloudinary.com/alynasser/image/upload/v1609434399/sageco-gallery/19_shxxgy.jpg',
    },
  ];

  constructor(
    private readonly lightbox: Lightbox,
    private readonly lightboxConfig: LightboxConfig
  ) {
    this.masonryItems.forEach((item) => {
      this.album.push({
        src: item.image,
        catopion: null,
        thumb: null,
      });
    });

    this.lightboxConfig.showZoom = true;
    this.lightboxConfig.showRotation = true;
    this.lightboxConfig.centerVertically = true;
    this.lightboxConfig.fitImageInViewPort = true;
  }

  ngOnInit(): void {}

  open(index: number): void {
    this.lightbox.open(this.album, index);
  }

  close(): void {
    this.lightbox.close();
  }
}
