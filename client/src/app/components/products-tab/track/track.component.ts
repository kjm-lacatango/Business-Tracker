import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Track {
  id: string;
  productName: string;
  height: string;
  soldOut: number;
  capital: number;
  profit: number;
}

@Component({
  selector: 'tracks',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './track.component.html',
  styleUrl: './track.component.scss'
})
export class TrackComponent {
  tracks: Track[] = [
    {id: "1", productName: "Ice Tea", height: '80%', soldOut: 1000, capital: 150000, profit: 1500000},
    {id: "2", productName: "Milk Tea", height: '55%', soldOut: 1000, capital: 150000, profit: 1500000},
    {id: "3", productName: "Fruit Tea", height: '70%', soldOut: 1000, capital: 150000, profit: 1500000},
  ];
}
