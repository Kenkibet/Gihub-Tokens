import { Component, OnInit } from '@angular/core'
import { ProfileService } from '../../services/profile.service'

@Component({
  selector: 'app-profile-form',
  template: `
    <div class="card shadow p-2 my-3">
      <div class="card-body">
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Github username"
              (keyup)="submitSearch($event)"
            />
          </div>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./profile-form.component.css'],
})
export class ProfileFormComponent implements OnInit {
  submitSearch(name) {
    this.profileService.getProfileInfo(name.target.value)
    this.repoService.getRepoInfo(name.target.value)
  }

  constructor(
    private profileService: ProfileService,
    private repoService: ProfileService,
  ) {}

  ngOnInit() {
    this.profileService.getProfileInfo("kenkibet")
    this.repoService.getRepoInfo("kenkibet")
  }
}
