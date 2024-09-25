import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../services/blockchain.service';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-blockchain-view',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './blockchain-view.component.html',
  styleUrl: './blockchain-view.component.css'
})
export class BlockchainViewComponent implements OnInit {
  blockchain:any[]=[];
  filterInput: string = '';
  constructor(private blockchainService: BlockchainService){}

  ngOnInit() {
      this.blockchainService.getBlockchainData().subscribe((data)=>{
      this.blockchain = data;
    })
  }
}
