import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { AnimeService } from '../services/api.service';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css'],
  imports: [NgIf, NgFor],
  standalone: true,
  providers: [ AnimeService],
})
export class ApiDataComponent implements OnInit {
  animeList: any[] = [];
  errorAnime: string | null = null;

  constructor(
    private animeService: AnimeService
  ) {}

  ngOnInit(): void {
    this.fetchAnimeData();
  }

 

  fetchAnimeData(): void {
    this.animeService.getAnimeList().subscribe(
      (data) => {
        console.log('Anime Data:', data);
        this.animeList = data.data || [];
      },
      (error) => {
        console.error('Error fetching anime data', error);
        this.errorAnime = 'Failed to load anime. Please try again later.';
      }
    );
  }
}
