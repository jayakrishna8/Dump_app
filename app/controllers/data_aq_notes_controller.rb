class DataAqNotesController < ApplicationController
  include SegmentSupport
  before_action :require_login, :reload_on_published

  # POST /data_aq_notes
  def create
    @data_aq_note = DataAqNote.new(data_aq_note_params)
    @data_aq_note.segment_detail_id = current_sub_seg.id
    flash[:notice] = 'Data Aq Note was successfully reset.'
    unless params[:commit] == 'RESET'
      if @data_aq_note.save
        @data_aq_note.assign_user(current_user)
        flash[:notice] = 'Data Aq Note was successfully created.'
      end
    end
    render 'create_or_update'
  end

  # PATCH/PUT /data_aq_note/1
  def update
    set_data_aq_note
    current_sub_seg
    @data_aq_note.segment_detail_id = current_sub_seg.id
    flash[:notice] = 'Data Aq Note was successfully reset.'
    unless params[:commit] == 'RESET'
      if @data_aq_note.update(data_aq_note_params)
        @data_aq_note.assign_user(current_user)
        flash[:notice] = 'Data Aq Note was successfully updated.'
      end
    end
    render 'create_or_update'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_data_aq_note
      @data_aq_note = DataAqNote.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def data_aq_note_params
      params.require(:data_aq_note).permit(:segment_detail_id, :normal_priority, :high_priority, :segment_id).merge(party: current_party)
    end
end